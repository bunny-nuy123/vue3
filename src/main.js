// 全局样式
// import '@/assets/todo/base.css'
// import '@/assets/todo/index.css'

// create 函数创建一个应用实例
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

// createApp 函数接受一个参数,这个参数是一个vue组件/模板
// createApp 括号中的这个参数就叫做根组件
const app = createApp(App)
//全局处理错误捕获 异常信息
app.config.errorHandler = (err,instance,info)=>{
  console.log(`app err->`,err)
  console.log(`app instance->`,instance)
  console.log(`app info->`,info)


}
// use 使用资源 中间件
app.use(createPinia())
// app.use(router)



//最后再调用mount,两种方法,想让自己的应用程序挂载在那里,就展示在那里index.html中的divapp, 1.css选择器 2. dom元素
// mount 方法一定在应用资源配置完成之后再调用,否则无效
app.mount('#app')
// app.mount(document.getElementById('app'))
