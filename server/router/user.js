var express = require('express');

//创建路由
var router = express.Router();

// 路由对应的出了方法
router.get('/', function(req, res){
   // res.send('我是user首页');
   res.render('test');

});

router.get('/list', function(req, res){
   res.send('我是user-list页');
});

router.get('/test', function(req, res){
   res.render('test');
});
 
 //向外暴露模块
 module.exports = router;