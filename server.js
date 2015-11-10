'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

var app = express();
app.set('view engine', 'jade');
app.use(morgan('dev'));
// app.use(morgan('combined'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/markdown', function(req, res) {
  var string = marked(req.body.input);
  res.send(string);
});

app.listen(3000);