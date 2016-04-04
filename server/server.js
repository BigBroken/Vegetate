var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/';

var app = express();

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'Vegetate'});
});


app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Server listening' + port);
});  

module.exports = app;
