import axios from "axios";
import {ref,toValue,watchEffect } from 'vue'
export const useRequest = (url)=>{
  const data = ref(null)
  const error = ref({})
  const getData = (url)=>{
    axios({
      //不管传递的是ref对象 还是 字符串;普通对象toValue都会把它变成想要的值.val   或者 函数本身
        url:toValue(url)
      }).then(res => {
        console.log(`output->res`,res)
        if(res.data.success){
             data.value = res.data.data.product
             console.log(`axios,data.value->`,data.value)
          }else{
            error.value = res.message
          }
      }).catch(err=>{
        error.value = err
      })
  }

  //封装axios 在调用一次  立即调用请求 监听到数据改变就会执行
  watchEffect(()=>{
    getData(url)
  })

  return {data,error}
}

