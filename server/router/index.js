var express = require('express');

//创建路由
var router = express.Router();

var User = require('../models/model_user.js'); //引入对象

//模拟数据
allUser = {
   code: 0,
   list: [{
      name: 'aa',
      age: 10,
      sex: 1
   }, {
      name: 'bb',
      age: 20,
      sex: 2
   }, {
      name: 'cc',
      age: 30,
      sex: 3
   }, {
      name: 'dd',
      age: 40,
      sex: 4
   }]
}


// // 路由对应的出了方法
// router.get('/', function(req, res) {
//    // var cts = '我是路由模块--设置的首页1';
//    // res.send(cts);


//    // 查询数据库获取所有待办事项.
//    TodoModel.find(function(err, todos, count) {
//       res.send(todos);
//    });
// });

// 获取所有用户列表
router.get('/userList', function(req, res) {
   let userList = User.find({}, function(err, data) {
      if (err) throw err;
      res.send(data);
   });
});

router.post('/reg', function(req, res) {
   // 获取用户提交的信息
   let postData = {
         username: req.body.username,
         password: req.body.password,
         userage: req.body.userage,
         address: req.body.address
      }
      // 查询是否被注册
   User.findOne({
      username: postData.username
   }, function(err, data) {
      // console.log(data);
      if (data) {
         res.send({
            code: 0,
            msg: '用户名已注册'
         });
      }else {
         User.create(postData, function(err, data) {
            if (err) throw err;
            console.log('suc');
            res.send({
               code: 200,
               msg: '注册成功'
            })
            // res.redirect('/userList');
         })
      }
   })

});

//验证登录
router.post('/login', function(req, res, next) {

   var postData = {
      username: req.body.username,
      password: req.body.password
   };
   User.findOne({
      username: postData.username,
      password: postData.password
   }, function(err, data) {
      // console.log(data);
      if (err) throw err;
      if (data) {
         res.send('登录成功');
      } else {
         res.send('账号或密码错误')
      }
   })

})

router.get('/list/:who', function(req, res) {
   res.send(`我是list页,you ${req.params.who}`);
});

// router.get('/list/:who?', function(req, res){
//    if(req.params.id){
//       res.send(`Hello,${req.params.who}`)
//    }else{
//       res.send('Hello,Guest')
//    }
// });

router.get('/test', function(req, res) {
   res.render('test', { msg: 'hello world' });
});

//向外暴露模块
module.exports = router;
