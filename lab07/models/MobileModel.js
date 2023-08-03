var mongoose = require('mongoose');

var MobileSchema = mongoose.Schema(
   {
      brandName  : String,
      phoneModel : String,
      quantity   : Number,
      price      : Number,
      date       : Date,
      image      : String,
      bestSeller : Boolean
   }
);

/* 'mobile' là tên của bảng (collection) => bắt buộc phải gõ đúng
   'dien thoai' là description cho bảng => có thể gõ giống hoặc khác tên bảng */

var MobileModel = mongoose.model('dien thoai', MobileSchema, 'mobile');
module.exports = MobileModel;