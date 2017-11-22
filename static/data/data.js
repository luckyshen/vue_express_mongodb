'use strict';
(function(size) {
   document.addEventListener('DOMContentLoaded', function() {
      var html = document.documentElement;
      var windowWidth = html.clientWidth;
      html.style.fontSize = windowWidth / size + 'px';
   }, false);
})(7.5);

// let jQcdn = 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js';



// (function() {
//     var hm = document.createElement("script");
//     hm.src = jQcdn;
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })()



/** 
 * 获取浏览器语言 
 * @returns language 
 */  

// function getLang(){ 

//     // if(typeof(cacheLang) != "undefined"){  
//     //     return cacheLang;  
//     // }  
//     if (navigator.language) {  
//         cacheLang = navigator.language.toLowerCase();  
//         return cacheLang;  
//     }else {  
//         cacheLang = navigator.browserLanguage.toLowerCase();  
//         return cacheLang;  
//     }  
// }

// let lang =  getLang();
