var Product=require('../models/product');
var mongoose=require('mongoose');
var handlebars=require('handlebars');
mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true });



var products=[
  new Product ({
  imagePath:'https://s7d2.scene7.com/is/image/SamsungUS/Pdpdefault-SM-G930VZKATFN-600x600-C1-052016',
  title:'Samsun Galaxy',
  description:'The first smartphone with dual-pixel technology for professional-looking photos.',
  price: '100$'
}),

new Product ({
imagePath:'https://i.ebayimg.com/images/g/o1QAAOSwMqBaZWnu/s-l1600.jpg',
title:'Huawei Mate 10 Lite',
description:'Get the 5.9 inch full view display, enjoy the wonderful view experience.',
price: '150$'
}),
new Product ({
imagePath:'https://cdn2.gsmarena.com/vv/pics/sony/sony-xperia-z-purple.jpg',
title:'Sony Xperia Z',
description:'The Xperia Z is one of the main pillars of Sonys new plan to focus on mobile, gaming and imaging.',
price: '90$'
}),

new Product ({
imagePath:'https://cdn.movertix.com/media/catalog/product/cache/image/600x/l/g/lg-g6-negro-h870-8806087020083.jpg',
title:'LG G6',
description:'The LG G6 utilizes a metal chassis with a glass backing, and is IP68-rated for water and dust-resistance.',
price: '120$'
})


];

var done=0;
for (var i=0; i<products.length;i++){
  products[i].save(function(err,result){
  done++;
  if(done== products.length){
    exit();
  }
  });
}

function exit(){
  mongoose.disconnect();
}
