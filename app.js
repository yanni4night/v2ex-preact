/**
 * Copyright (C) 2016 yanni4night.com
 * app.js
 *
 * changelog
 * 2016-09-08[13:24:41]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.use(express.static(__dirname + '/dist/'));

app.get('/api/topics/hot.json', function (req, res) {
    fetch('https://www.v2ex.com/api/topics/hot.json').then(function (res) {
        return res.json();
    }).then(function (data) {
        res.json(data);
    });
});

app.get('/api/topics/latest.json', function (req, res) {
    fetch('https://www.v2ex.com/api/topics/latest.json').then(function (res) {
        return res.json();
    }).then(function (data) {
        res.json(data);
    });
});

app.listen(3000);