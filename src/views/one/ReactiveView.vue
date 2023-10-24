<template>
  <div>
    <div>{{ proxy.name }}</div>
    <div>{{ proxy.foo.bar.asd }}</div>
    <button @click="proxyChangeName"> 修改代理1{{ proxy.name  }}</button>
    <div></div>
    <div>{{ proxy2.foo.bar.asd }} ---{{ proxy2.name }}</div>
    <button @click="proxy2ChangeName"> 修改proxy2=>{{ proxy2.name  }}</button>
    <div>-----------------------</div>
    <button @click="changeName">{{ name }}</button>
  </div>
</template>

<script setup>
import {reactive,shallowReactive,isReactive,isRef} from 'vue'
// Reactive 也是包装响应式对象
// 接受的参数只能是 数组 对象 或者集合 Map, set
// 基本数据类型Reactive 不支持 string,boolean,number
// reactive 内部实现用的是Es6 Proxy 对象生成一个原始对象的代理对象
// reactive 默认也是一个深度响应式对象

// shallowReactive 浅层响应
// 只有第一层具有响应性
const raw = {
  name:'赵四',
  foo:{
    bar:{
      asd:'i'
    }
  }
}
const proxy = reactive(raw)



console.log("raw === reactive--------->",raw === reactive);//false 原始对象和代理对象不相等
const proxyChangeName= () =>{
  // raw.name = '小狗' // 报错修改失败 原始对象不具备响应式

 //reactive中 代理对象 具备响应式的 直接访问不需要点value 
  // proxy.name = '赵四'

  proxy.foo.bar.asd = 'hello,赵四'
}


// ------------------------------------------------
// shallowReactive  浅层响应式
const raw2 = {
  name:'小红',
  foo:{
    bar:{
      asd:'ooooooo'
    }
  }
}
const proxy2 = shallowReactive(raw2)
const proxy2ChangeName = ()=>{
  proxy2.foo.bar.asd= 'helo,ooooo'
  proxy2.name="离离原上草" // name改变  触发发了响应式改变,没有name,asd也不会改变
  // proxy2.foo.bar.asd = 'hello,小红'//不可以改变foo,不具备浅层响应
  // proxy2.foo = {
  //   bar:{
  //     asd:'你好,oooooo'
  //   }
  //具备浅层响应
 // proxy2.name = '小蓝'//可以改变名字shallowReactive
}


// 工具isReactive 写业务非常有用   检查一个对象是不是代理对象创建的代理布尔类型值 
// console.log(isReactive(proxy));//true
// console.log(isReactive(proxy2));//true
// console.log(isReactive(raw));//false



// // 基本数据类型Reactive 不支持 string,boolean,number
// const num = reactive('hel')//错
// const num = reactive(80) //错
// const num = reactive(true)//错
// console.log("num====>",num);

// 解构
let { name, foo } = proxy
let changeName = () => {
  name = "呜呜呜呜"
  console.log('name===>',name);
}

//  reactive 的属性作为函数参数传递时不具备响应性
const test = (val)=>{
  console.log(isReactive(val));//FALSE
  console.log("isRef",isRef(val));//FALSE
}
test(proxy.name)
</script>

<style scoped>

</style>