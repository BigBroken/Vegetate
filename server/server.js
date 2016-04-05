var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var model = require('./models/schema');
var moment = require('moment')

var port = process.env.PORT || 8000;
var db = process.env.MONGOLAB_URI || 'mongodb://localhost/a';

var app = express();

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',express.static(__dirname + '/../App'));

app.get('/db/pantry',function(req, res){
  console.log('attempting to get pantry');
  model.Pantry.find({}, function(err, pantry){
    if(err){
      console.log(err+'heyy');
      return err;
    }
    // console.log(pantry);
    var data = pantry.map(function(item) {
      return {
        _id: item._id,
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
    console.log(vegetable);
    if(err) {
      console.log(err);
      return err;
      res.sendStatus(400);

    } else if (vegetable) { 
      new model.Pantry({'name': vegetable.name, 'shelf_life': vegetable.shelf_life}).save(function(err,pantry){
        if(err){
          console.log(err);
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      });
    }
  //   } else {
  //     new model.Pantry({'name': vegetable.name, 'shelf_life': 37317600}).save(function(err,pantry) { 
  //       if(err){
  //         console.log(err);
  //       } else {
  //         console.log(pantry);
  //       }
  //     });
  //   }

  });
});
app.post('/db/remove', function(req,res){ 
  model.Pantry.findOne(req.body, function(err, item){
    if(err){
      console.log(err);
      return err;
    }
    item.remove(function(err,item){
      res.sendStatus(200);
    });
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
