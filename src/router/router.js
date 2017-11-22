import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来

import Hello from '../components/Hello'

Vue.use(VueRouter);


// 2. 定义路由
/* 每个路由应该映射一个组件。 其中"component" 可以是
* 通过 Vue.extend() 创建的组件构造器，
* 或者，只是一个组件配置对象。
*/
const routes = [
    {
        path: '/',
        name: 'default',
        component: Hello
    },

]

// 3. 创建 router 实例，然后传 `routes` 配置
let router = new VueRouter({
    routes:routes, // （缩写）相当于 routes: routes
    base:'./'
});

// import login from '../setting/login.js'


// router.beforeEach((to, from, next) => {
//     if(to.meta.requireAuth && !login.authenticated())
//     {
//       next({
//           path: '/tt',
//           query: { redirect: to.fullPath }
//         })
//     }
//     else {
//       next()
//     }
// })


export default router 