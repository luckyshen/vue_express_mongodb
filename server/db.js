var mongoose = require("mongoose"); //引入mongoose

// DB_URL = 'mongodb://admin:admin@192.168.96.203:11222/admin?authSource=admin';  // 定义数据库名称admin
DB_URL = 'mongodb://192.168.96.203:11222/adminuser';  // 定义数据库名称adminuser
mongoose.connect(DB_URL); //连接到mongoDB的todo数据库
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017  

var db = mongoose.connection; // 连接

db.on('error', function(err) { //监听是否有异常
    console.log('Mongoose connection error: ' + err);
});
db.once('open', function() { //监听一次打开
    console.log('Mongoose connection open to ' + DB_URL);
});

// //在这里创建你的模式和模型
// mongoose.Promise = global.Promise;

// var UserSchema = new mongoose.Schema({
//    username: { type: String }, //用户账号
//    userpwd: { type: String }, //密码
//    userage: { type: Number }, //年龄
//    logindate: { type: Date } //最近登录时间
// });

// var myModel = mongoose.model('user', UserSchema);

module.exports = mongoose;
