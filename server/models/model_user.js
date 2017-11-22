var mongoose = require("../db.js");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//在这里创建你的模式和模型
var UserSchema = new Schema({
   username: { type: String }, //用户账号
   password: { type: String }, //密码
   userage: { type: Number }, //年龄
   address: String,
   logindate: { //最近登录时间
      type: Date,
      default: Date.now()
   }
});

var myModel = mongoose.model('user20171121', UserSchema);  // 注册数据库表名


module.exports = myModel;
