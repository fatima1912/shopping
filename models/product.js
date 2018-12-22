var handlebars=require('handlebars');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


// define how the data should look like
var schema=new Schema ({
  imagePath: {type:String, required:true},
  title: {type:String, required:true},
  description: {type:String, required:true},
  price: {type:Number, required:true}

});
module.exports=mongoose.model('Product',schema);
