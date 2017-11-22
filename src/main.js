// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import store from './store/store';
import router from './router/router';

// import vueg from 'vueg';
// import 'vueg/css/transition-min.css';
// const options = {
//     forwardAnim: 'fadeInRight', //前进动画，默认为fadeInRight  
// }
// Vue.use(vueg, router,options);

// import axiosConf from './axiosConf/axiosConf.js';

//引入VueResource
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false



// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
   //  store,
    render: h => h(App)
}).$mount('#app');

// 打开的默认路径
// router.push('/hello');
