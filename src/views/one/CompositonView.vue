<template >
  <div>
    <!--在dom中可以直接访问到ref的值 ,自动解包js中访问ref 需要点valua  -->
    组合式书写分格
    <button @click="num++">{{ num++ }}</button>
  </div>
</template>
<script setup>
// Vue3中 文件名就是组件名称

import {ref} from 'vue'
// ref会把一个值包装成一个响应式对象,这个对象拥有一个value属性
const num = ref(10)
// js中访问ref 需要点valua
console.log("js中访问ref 需要点valua......",num.value);
</script>

<style>
</style>