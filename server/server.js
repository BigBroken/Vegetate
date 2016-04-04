var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/produce';

var app = express();

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../App'));


app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Server listening' + port);
});  

module.exports = app;
