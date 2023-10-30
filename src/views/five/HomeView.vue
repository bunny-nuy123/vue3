<template>
  <div>
    HomeView
    <button @click="goAbout"> go about</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goAbout = ()=>{
  // 直接传路径
  // router.push('./about')

  //传对象 传参数 使用query  path只能跟query搭配使用
  router.push({ path: '/about',query:{a:'a',b:123}})
}
</script>
<style lang="scss" scoped>
</style>