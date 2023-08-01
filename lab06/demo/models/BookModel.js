const mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
   //note: khai báo tên của các field (column) ở đây cùng kiểu dữ liệu tương ứng
   title: String,
   author: String,
   date: Date,
   price: Number,
   quantity: Number
});

//note: khai báo tên của collection (table) ở đây. VD: "book"
var BookModel = mongoose.model("sach", BookSchema, "book");

module.exports = BookModel;