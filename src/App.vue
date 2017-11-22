<template>
   <div id="app">
     <router-view ></router-view>
   </div>
</template>

<script>
export default {
  data(){
   return{
      
      
   }
  },
 
  mounted(){   
    // console.log(this.getLang());
  },
  
  methods:{
    //获取浏览器语言
    getLang(){
        if (navigator.language) {  
            let cacheLang = navigator.language.toLowerCase();  
            return cacheLang;  
        }else {  
            let cacheLang = navigator.browserLanguage.toLowerCase();  
            return cacheLang;  
        }  
    }

    
  }
}
</script>

<style lang="less" >
  .a{
    font-size: 60px;
  }
  .animated{
   box-shadow:none;
  }
  
</style>
