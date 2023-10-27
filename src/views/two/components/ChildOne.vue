<template>
  <div>
    子组件
    <div>我的值是从父组件传来的 自动解包:{{ msg }}</div>
    <div>我的值是从父组件传来的 自动解包:{{ myTitle }}</div>
    <button @click="triggerCustomEvent">触发自定义事件</button>
  </div>
</template>
<script setup>
import {ref} from 'vue'
// 声明属性
defineProps(['msg','myTitle'])
//声明自定义事件
const emit = defineEmits(['receiveData'])


const name = ref('lisi')

//触发自定义事件
const triggerCustomEvent = ()=>{
  emit('receiveData',name)
}
</script>
<style lang="scss" scoped>
</style>