import setting from '../setting/setting.js'
import login from '../setting/login.js'
import axios from 'axios'
   
//axios配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://192.168.96.237/';//后台公共接口前缀

//axios 拦截器

axios.interceptors.request.use(
    (config) => {
        if (login.authenticated()) {
        	console.log(config);
          var token = login.getToken();
          config.headers.common["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    login.logout()
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        console.log(error);//console : Error: Request failed with status code 402
        return Promise.reject(error)
});
export default axios;