require('./db');

// 引入对象
var path = require('path');
var express = require('express');
//post请求使用
const bodyParser = require('body-parser');

// var methodOverride = require("method-override");
// var expressSanitizer = require("express-sanitizer");

var app = express();

//引入路由模块
var index = require('./router/index.js');
var user = require('./router/user.js');


app.use(bodyParser.urlencoded({ // 此项必须在 bosyParser.json 下面，为参数编码
   extended: false
}));
app.use(bodyParser.json()); // body-parser   解析json格式数据


//解决跨域  
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By", ' 3.2.1')
   res.header("Content-Type", "application/json;charset=utf-8"); //指定了json格式，使用模板时会返回纯html代码
   next();

});



//在express框架中使用ejs模板引擎
app.set('view engine', 'ejs');
//设置模板储存的目录
app.set('views', path.resolve(__dirname, './views'));
// 设置静态资源目录  --中间件 express.static 专门托管静态资源
app.use(express.static(path.resolve(__dirname, './public')));


//app.use将以/指定开头的路由交给指定模块处理
app.use('/', index);
//app.use将以/user指定开头的路由交给指定模块处理
app.use('/user', user)



// //接口调用地址及返回参数
// app.get('/:id', (req, res, next) => { //正常情况下、'/:Id'已经包含了'/100'所以路由搜索到此为止。
//    console.log(111);
//    next(); //通过next、让app继续向下搜索
//    // var json = {
//    //    'news': ['第一个', '第二个', '第三个']
//    // }
//    // res.render('index', json);
// });

// app.get('/100', (req, res, next) => {
//    console.log(req.query);
//    // myModel.find({ name: "aaa" }, function(err, user) {
//    //    console.log(user);
//    //    // res.render('index', { title: 'Express', user: user });
//    //    // res.status(200).send(allUser);
//    // });
//    res.status(200).send(allUser);
// });

// app.post('/main', (req, res, next) => {
//    console.log(req.body);

//    //  写入数据库
//    // new TodoModel({ //实例化对象，新建数据
//    //    content: req.body.content,
//    //    updated_at: Date.now()
//    // }).save(function(err, todo, count) { //保存数据
//    //    console.log('内容', todo, '数量', count); //打印保存的数据
//    //    res.redirect('/'); //返回首页
//    // });

//    res.send(allUser);
// });






app.listen(9988, '192.168.96.203', function() {
   // var host = server.address().address
   //   var port = server.address().port
   //   console.log('app listening at http://%s:%s', host,port)
   console.log(' 192.168.96.203:9988位置运行了..');
})
