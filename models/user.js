var express = require('express');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var router = express.Router();
var bcrypt=require('bcrypt-nodejs');


var userSchema=new Schema({
  email: {type:String, required:true},
  password:{type:String, required:true}
});

userSchema.methods.encryptPassword=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}
userSchema.methods.validPassword=function(password){
  return bcrypt.compareSync(password,this.password);
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = mongoose.model('User',userSchema);
