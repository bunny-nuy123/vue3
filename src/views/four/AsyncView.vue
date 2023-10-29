<!-- <template>
  <div>
    异步组件
 TextView 一进来就加载了 -->
    <!-- <TextView ></TextView>
    <div>-----------------------</div>
    <div style="height: 100vh; background-color: aqua;"></div>
   这个是一点击按钮才会发送请求 -->
    <!-- <button @click="isShow = !isShow">toggle {{ isShow }}</button> -->
    <!-- 3.包装target  异步组件放在这里-->
    <!-- <div  ref="target">
    <AsyncCompTest v-if="isShow"></AsyncCompTest>
    </div>
  </div> --> 
<!-- </template>
<script setup>
// import TestView from './TestView.vue';
import LoadingCom from './LoadingCom.vue'
import ErrorCom from './ErrorCom.vue'
// 1.引入useIntersectionObserver
import { useIntersectionObserver } from '@vueuse/core'
import { ref, defineAsyncComponent } from 'vue'
const isShow = ref(false)
// const AsyncCompTest = defineAsyncComponent(() => {
//   return import('./TextView.vue')
// })

const AsyncCompTest = defineAsyncComponent({
 // 加载函数
//  loader: () => import('./TestView.vue'),

// 加载异步组件时使用的组件
loadingComponent: LoadingCom,
// 展示加载组件前的延迟时间，默认为 200ms
delay: 200,

// 加载失败后展示的组件
errorComponent: ErrorCom,
// 如果提供了一个 timeout 时间限制，并超时了
// 也会显示这里配置的报错组件，默认值是：Infinity
timeout: 1000
})
// 2.引入的vueuse   target就是要监听Dom
const target = ref(null)
// useIntersectionObserver(
//   target,
//   ([{ isIntersecting }]) => {
//     console.log(`isIntersecting->`,isIntersecting)//true  表示在视口内
//      if(isIntersecting){
//       isShow.value = true
//      }
//   },
// )

</script>
<style lang="scss" scoped></style> -->

<template>
  <div>
    异步组件
    <div>----------------</div>
    <!-- <TestView v-if="isShow"></TestView> -->
    <button @click="isShow = !isShow">toggle {{ isShow }}</button>
    <!-- <div style="height: 100vh; background-color: red;"></div> -->
    <AsyncCompTest v-if="isShow"></AsyncCompTest>
    <div ref="target">
    </div>

  </div>
</template>
<script setup>
// import TestView from './TestView.vue';
import { defineAsyncComponent, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import LoadingCom from './LoadingCom.vue'
import ErrorCom from './ErrorCom.vue'
const isShow = ref(false)
// const AsyncCompTest = defineAsyncComponent(()=>{
//   return new Promise(async (resolve,reject)=>{
//     // ajax 
//     const res = axios({url:'xxxxxxx'})
//     resolve(res.data)
//   })
// })

// target 就是要监听的DOM
const target = ref(null)
// useIntersectionObserver(
//   target,
//   ([{ isIntersecting }]) => {
//     console.log("isIntersecting==>", isIntersecting);
//     if(isIntersecting){
//       isShow.value = true
//     }
//   }
// )

// const AsyncCompTest = defineAsyncComponent(() => {
//   return import('./TestView.vue')
// })

const AsyncCompTest = defineAsyncComponent({
  // loader:()=>import('./TestView.vue'),
  delay:200,
  loadingComponent:LoadingCom,
  errorComponent:ErrorCom,
  timeout:300
})
</script>
<style lang="scss" scoped></style>