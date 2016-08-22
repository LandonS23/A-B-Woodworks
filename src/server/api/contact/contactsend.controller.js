'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var sendMail = function (req, res) {
    var data = req.body;

    transporter.sendMail({
        from: data.contactEmail,
        to: 'landonsherwood23@gmail.com',
        subject: 'Message from ' + data.contactName,
        html: "<label>Name: </label>" + data.contactName + "<br/><label>Phone Number: </label>" + data.contactNumber + "<br/><label>Email: </label>" + data.contactEmail + "<br/><label>Message: </label>" + data.contactMsg
    });

    res.json(data);
};
