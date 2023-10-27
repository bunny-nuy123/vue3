<template>
  <div>
    子组件1
  </div>
</template>
<script setup>
// import{ onBeforeMount} from 'vue'
// onBeforeMount(()=>{
//   console.log(`output->onBeforeMount`)
// })
import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onUnmounted,onBeforeUnmount,onActivated, onDeactivated } from 'vue'
console.log(`子组件->setup......`)


onBeforeMount(()=>{
 console.log(`子组件1 ->onBeforeMount.....`)
})
onMounted(()=>{
  console.log(`子组件1 ->onMounted...`)
})
onBeforeUpdate(()=>{
 console.log(`子组件1 ->onBeforeUpdate.....`)
})
onUpdated(()=>{
  console.log(`子组件1 ->onUpdated...`)
})
onUnmounted(()=>{
 console.log(`子组件1 ->onUnmounted.....`)
})
onBeforeUnmount(()=>{
  console.log(`子组件1 ->onBeforeUnmount...`)
})
onActivated(()=>{
 console.log(`子组件1 ->onActivated.....`)
})
onDeactivated(()=>{
  console.log(`子组件1 ->onDeactivated...`)
})
// 宏命令 defineExpose
defineExpose({
  msg,
  fn
})
</script>