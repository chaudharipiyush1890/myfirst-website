var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});



router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

  router.post('/contact', function(req, res, next) {
        const myarray={
      myname:req.body.text1,
      mysurname:req.body.text2
    }
    res.render('home', { msg: 'myname' });
  }); 
 module.exports = router;
