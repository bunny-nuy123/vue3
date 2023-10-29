<template>
  <div>
    爷爷
    <pre>{{ obj }}</pre>
    <FatherView :msg="msg"></FatherView>
  </div>
</template>
<script setup>
import FatherView from './FatherView.vue';
import {ref,provide,inject} from 'vue'
import {DEMO_MSG,APP_MSG } from '@/constant/index.js'
const msg = ref('hello')
//提供 provide  
provide(DEMO_MSG,"你好")
const obj = inject(APP_MSG)
// console.log(obj.name)
// console.log(obj.age)
</script>
<style lang="scss" scoped>
</style> 