/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
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
        from: '"A&B Woodworks" <ABWoodworksWeb@gmail.com>',
        to: 'landonsherwood23@gmail.com',
        subject: 'Inquiry from ' + data.contactName,
        html: '<img src="https://s3.postimg.org/4vurxswy7/AB_transparent.png" height="40"><h3>Contact Info:</h3><BLOCKQUOTE><b>Name: </b>' + data.contactName + '<br/><b>Phone Number: </b>' + data.contactNumber + '<br/><b>Email: </b>' + data.contactEmail + '</BLOCKQUOTE><h3>Message:</h3><BLOCKQUOTE>' + data.contactMsg + '</BLOCKQUOTE>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
        transporter.close();
    });
    res.json(data);
});
