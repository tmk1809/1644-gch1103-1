var express = require ('express');
const MobileModel = require('../models/MobileModel');
var router = express.Router();

router.get('/', async(req, res) => {
  var mobiles = await MobileModel.find();
  
  //render ra file view "index.hbs" nằm trong thư mục "views/mobile"
  res.render('mobile/index', { mobiles : mobiles});
});

module.exports = router;