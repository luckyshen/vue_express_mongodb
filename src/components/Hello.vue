<template>
   <div class="hello">
      <p>注册</p>
      <form>
         <input type="text" name="name" v-model="inputtext.regname" placeholder="姓名">
         <input type="password" name="password" v-model="inputtext.regpwd" placeholder="密码">
         <input type="text" name="age" v-model="inputtext.regage" placeholder="年龄">
         <input type="text" name="address" v-model="inputtext.regaddress" placeholder="地址">
      </form>
      <p>登入</p>
      <form>
         <input type="text" name="name" v-model="inputtext.name" placeholder="姓名">
         <input type="password" name="password" v-model="inputtext.pwd" placeholder="密码">
      </form>
      <div @click='reg()'>点击注册</div>
      <div @click='login()'>点击登入</div>
      {{inputtext.p}}
      <router-view></router-view>
   </div>
</template>
<script>
export default {

   data() {
         return {
            inputtext: {
               name: '',
               pwd: '',
               age: '',
               address: ''
            },
            pathf: 'authorize'
         }
      },
      methods: {
         reg() {
            // const formdata = JSON.stringify(this.inputtext);
            const formdata = {
               username: this.inputtext.regname,
               password: this.inputtext.regpwd,
               userage: this.inputtext.regage,
               address: this.inputtext.regaddress
            };
            // console.log(formdata);
            this.$http.post('http://192.168.96.203:9988/reg ', formdata).then((res) => {
               console.log(res.data);
            }, (res) => {
               // console.log(444);
            })

            // this.$http.get('http://192.168.96.203:9988/', formdata).then((res) => {
            //    console.log(res.data);
            // }, (res) => {
            //    console.log(444);
            // })

         },
         login() {
            const sendData = {
               username: this.inputtext.name,
               password: this.inputtext.pwd
            };
            this.$http.post('http://192.168.96.203:9988/login ', sendData).then((res) => {
               console.log(res.data);
            }, (res) => {
               // console.log(444);
            })
         }
      }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
</style>
