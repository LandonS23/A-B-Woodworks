/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
//var xoauth2 = require('xoauth2');
//var generator = require('xoauth2').createXOAuth2Generator({
//    user: 'ABWoodworksWeb@gmail.com', // Your gmail address.
//
//    clientId: '',
//    clientSecret: '',
//    refreshToken: '',
//});
// listen for token updates
// you probably want to store these to a db
//generator.on('token', function (token) {
//    console.log('New token for %s: %s', token.user, token.accessToken);
//});
//var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
//login
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ABWoodworksWeb@gmail.com',
        pass: 'chrisaikins03'
    }
});
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var logger = require('morgan');
var port = process.env.PORT || 7203;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());

console.log('Starting node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function (req, res, next) {
    console.log(req.body);
    res.send('pong');
});

console.log('** DEV **');
app.use(express.static('./src/client/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});


app.post('/send', function (req, res) {
    var data = req.body;

    var mailOptions = {
        from: '"A&amp;B Woodworks" <ABWoodworksWeb@gmail.com>',
        to: 'landonsherwood23@gmail.com',
        subject: 'Message from ' + data.contactName, // Subject line
        //        text: 'Hello world ', // plaintext body
        html: '<label>Name: </label>' + data.contactName + '<br/><label>Phone Number: </label>' + data.contactNumber + '<br/><label>Email: </label>' + data.contactEmail + '<br/><label>Message: </label>' + data.contactMsg // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
        transporter.close();
    });
    //res.redirect('/');
    res.json(data);
});
