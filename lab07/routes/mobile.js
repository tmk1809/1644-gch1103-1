var express = require ('express');
const MobileModel = require('../models/MobileModel');
var router = express.Router();

router.get('/', async(req, res) => {
  //SQL: SELECT * FROM mobile
  var mobiles = await MobileModel.find();
  
  //render ra file view "index.hbs" nằm trong thư mục "views/mobile"
  res.render('mobile/index', { mobiles : mobiles});
});

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  //SQL: DELETE FROM mobile WHERE id = '_id'

  await MobileModel.findByIdAndDelete(id)
  .then(() => console.log ('delete succeed !'))
  .catch((error) => console.log ('delete failed'));

  //redirect về trang mobile index sau khi xóa
  res.redirect('/mobile');
})

router.get('/deleteall', async (req, res) => {
  await MobileModel.deleteMany()
    .then(() => console.log('delete succeed !'))
    .catch((error) => console.log('delete failed'));
  res.redirect('/mobile');
})

module.exports = router;