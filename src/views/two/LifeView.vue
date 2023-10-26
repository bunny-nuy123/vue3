<template>
  <div>
    生命周期
    <div>{{ proxy }}</div>
    <button id="btn" @click="num++">{{ num }}</button>
    <button @click="doUnmouteComp">卸载组件</button>
    <!-- <input type="radio" :value="ChildOne"  v-model="currentComp">ChildOne
    <input type="radio" :value="ChildTwo"  v-model="currentComp">ChildTwo
     <KeepAlive>
     <component :is="currentComp"></component>
     </KeepAlive> -->
  </div>
</template>
<script setup>
import ChildOne from '@/views/two/ChildOne.vue';
import ChildTwo from '@/views/two/ChildTwo.vue';


import {shallowRef,reactive,getCurrentInstance,ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onUnmounted,onBeforeUnmount,onErrorCaptured,onRenderTracked,onRenderTriggered} from 'vue'
  const num = ref(0)

  // 顶级作用域 必须写在<script setup >作用域里边使用
const instance = getCurrentInstance()

  console.log(`setup....`)
  onBeforeMount(()=>{
    console.log(`onBeforeMount->`)
  })
  onMounted(()=>{
    console.log(`onMounted->`)
  })
  onBeforeUpdate(()=>{
    console.log(`onBeforeUpdate->`)
    // console.log(document.getElementById('btn').innerText)
  })
  onUpdated(()=>{
    console.log(`onUpdated->`)
  })
  onBeforeUnmount(()=>{
    console.log(`onBeforeUnmount->`)
  })
  onUnmounted(()=>{
    console.log(`onUnmounted->`)
  })


 const doUnmouteComp=()=>{
   console.log(`instance-------->`,instance)
  //  找到实例父亲里边的内容
   instance.appContext.app.unmount()
  }

  // 错误捕获  只能捕获子组件的错误
  // 默认向上传递
  // onErrorCaptured((err,instance,info)=>{
  //   console.log(`onErrorCaptured...`,err)//异常信息
  //   console.log(`onErrorCaptured...`,instance)//发生异常的组件实例对象
  //   console.log(`onErrorCaptured...`,info)//异常源
  //  // 组织向上传递
  //   return false
  // })

  const proxy = reactive({
    name:'赵四',
    age:12,
    gender:1
  })
  //两个调试的钩子
  //travked 一进页面就会触发

  // onRenderTracked((effect,target, type,/* 'get' | 'has' | 'iterate' */
  // key)=>{
  //   console.log(`effect->`,effect)
  //   console.log(`target->`,target)
  //   console.log(`type->`,type)
  //   console.log(`key->`,key)

  // })
  //当数字num 改变就会触发trigger钩子函数  服务端渲染
  onRenderTriggered((e)=>{
    console.log(`onRenderTriggered->`,e)
  })
// 声明组件
const currentComp = shallowRef(ChildOne)
</script>

<style>
</style>