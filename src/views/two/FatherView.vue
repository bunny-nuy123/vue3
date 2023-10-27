<template>
  <div>
    父组件
    <button @click="handleClick">按钮</button>
    <ChildOne msg="hello" my-title="标题你好"></ChildOne>
    <ChildOne @receiveData="handleReceive" :msg="message" my-title="我是一个标题"></ChildOne>
  </div>
</template>
<script setup>
import ChildOne from './ChildOne.vue';

import {ref} from 'vue'
const message = ref('hello world')

const handleReceive = (arg)=>{
  console.log(`xxxxx.......`,arg.value)
}
const handleClick = ()=>{
  console.log(`click......->`)
}


</script>
<style lang="scss" scoped>
</style>