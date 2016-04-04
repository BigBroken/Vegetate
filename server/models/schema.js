var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produceSchema = new Schema({
  name:  String,
  shelf_life: String,
  date: { type: Date, default: Date.now },
});

var userSchema = new Schema({
  name: String,
  password: String,

});

exports.User = mongoose.model('User', userSchema);
exports.Produce = mongoose.model('Produce', produceSchema);