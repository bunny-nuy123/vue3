<template>
  <div>
    儿子
    {{ abc }}
    <div>
      {{ val }}
    </div>
  </div>
</template>
<script setup>
import {inject} from 'vue'
import {DEMO_MSG} from '@/constant/index.js'
const props = defineProps(["abc"])
const val = inject(DEMO_MSG)
console.log(`output->val`,val)
</script> 
<style lang="scss" scoped>
</style>