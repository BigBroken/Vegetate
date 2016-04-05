var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var model = require('./models/schema');
var moment = require('moment')

var port = process.env.PORT || 8000;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/dataBase';

var app = express();

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../App'));

app.get('/db/pantry',function(req, res){
  console.log('attempting to get pantry');
  model.Pantry.find({}, function(err, pantry){
    if(err){
      console.log(err);
      return err;
    }
    // console.log(pantry);
    var data = pantry.map(function(item) {
      return {
        name: item.name,
        elapsed: (moment().diff(moment(item.date),'minutes')),
        shelf_life: item.shelf_life
      };
    });
    res.send(data);
  });
});

app.post('/db/pantry', function(req, res) {
  console.log(req.body);
  model.Produce.findOne(req.body , function(err, vegetable){
    if(err) {
      console.log(err);
      return err;
    }
    new model.Pantry({name: vegetbale.name, shelf_life: vegetable.shelf_life}).save();
  });
});


// new model.Produce({name: 'broccoli', shelf_life: 72}).save();

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Server listening' + port);
});  

module.exports = app;
