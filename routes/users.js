// //路由框架
// var express = require('express');
// var router = express.Router();      //实例化router
//
// router.post('/', function (req, res) {
//
// });
//
// module.exports = router;


var express = require('express');
var router = express.Router();      //实例化router

router.post('/', function (req, res) {
    res.write('<p>write段落</p>'+ '<img src="./images/eg_car.jpg">');
    res.end();
});

router.get('/signup',function(req,res){
    res.render('signup');
    res.end();
});
router.post('/signup',function (req,res) {
    res.write("your loginName:"+req.body.account);
    res.end();
})
module.exports = router;
