/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
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
app.use('/api/contact', express.static('./src/server/api/contact/index.js'));
app.use('/*', express.static('./src/client/index.html'));

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});

//var core = express.static('src/client/layout/layout.controller.js');


//var sendMail = function (req, res) {
//
//    var data = req.body;
//
//    transporter.sendMail({
//        from: data.contactEmail,
//        to: 'landonsherwood23@gmail.com',
//        subject: 'Message from ' + data.contactName,
//        html: "<label>Name: </label>" + data.contactName + "<br/><label>Phone Number: </label>" + data.contactNumber + "<br/><label>Email: </label>" + data.contactEmail + "<br/><label>Message: </label>" + data.contactMsg
//    });
//
//    res.json(data);
//};

//app.use('/contact-form', express.static('.src/server/server.js')).post(sendMail);
