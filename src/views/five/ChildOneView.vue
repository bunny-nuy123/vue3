<template>
  <div>
    组件1
    <div id="demo"></div>
    <button @click="num++">{{ num }}</button>
  </div>
</template>
<script setup>
import {ref,onActivated,onDeactivated,onBeforeMount,onMounted} from 'vue'
const num = ref(19)
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log(`ONE onActivated----->`)
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('ONE onDeactivated......') 
})
onBeforeMount(() => {
  console.log(`ONE onBeforeMount----->`)
})

onMounted(() => {
  console.log('ONE onMounted......') 
})
</script>
<style lang="scss" scoped>
</style>