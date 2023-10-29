export default {
  install(app,options){
    app.config.globalProperties.$t = function(val){
      // console.log("val==>",val);
      // console.log("options==>",options);
      // console.log(  val.split('.'));
      // console.log("Object.keys(options)==>",Object.keys(options));
      let arr = val.split('.')
      return arr.reduce((c,key)=>{
        if(c){
          return c[key]
        }
      },options)
      // return 123
    }

    // 全局依赖注入
    app.provide('language',options)
  }
}