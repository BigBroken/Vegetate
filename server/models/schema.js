var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var stuff = require('../../data/produce.js')
var _ = require('underscore');

var produceSchema = new Schema({
  name:  String,
  shelf_life: Number,
});
exports.Produce = mongoose.model('produce', produceSchema);

var userSchema = new Schema({
  name: String,
  password: String,
});
exports.User = mongoose.model('user', userSchema);

var pantrySchema = new Schema({
  name: [
    {type: Schema.Types.ObjectId, ref:'produce'}
  ],
  date: { type: Date, default: Date.now },
  shelf_life:[
    {type: Schema.Types.ObjectId, ref:'produce'}
  ]
});
exports.Pantry = mongoose.model('pantry', pantrySchema);

// populate the server
// console.log(data); 
// _.each(stuff.data, function(produceObj, key , list) {
//   new exports.Produce({name:produceObj.name, shelf_life:produceObj.shelf_life}).save(function(err,produce){
//     console.log(produce);
//   });
// });

// exports.Produce.find({}, function(err,produce){
//   if(err){
//     return
//   }
//   console.log(produce);
// });