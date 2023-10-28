<template>
  <!-- 无渲染组件 组件没有dom只有逻辑 -->
  <div>
    <slot :x="x" :y="y"></slot>
  </div>
</template>
<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
const x = ref(0)
const y = ref(0) 
const move = (e)=>{
  x.value = e.pageX
  y.value = e.pageY
}
onMounted(() => {
  window.addEventListener('mousemove',move)
}),
onUnmounted(() => {
  window.removeEventListener('mousemove',move)
})

</script>
<style lang="scss" scoped>
</style>