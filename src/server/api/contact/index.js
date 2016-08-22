/*jshint node:true*/
'use strict';

var express = require('express');
var controller = require('./contactsend.controller.js');

var router = express.Router();

router.post('/', controller.sendMail);

module.exports = router;