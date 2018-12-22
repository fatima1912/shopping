var handlebars=require('handlebars');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;


// define how the data should look like
var schema=new Schema ({
     user:{type: Schema.Types.ObjectId,ref:'User'},
     cart:{type: Object, required: true},
     address:{type: String, required: true},
     name:{type: String, required: true},
     paymentId:{type: String, required: true},

});
module.exports=mongoose.model('Order',schema);
