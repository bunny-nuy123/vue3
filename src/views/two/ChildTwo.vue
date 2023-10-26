<script setup>
import { onActivated, onDeactivated } from 'vue'

onDeactivated(()=>{
 console.log(`子组件2 ->onDeactiveated`)
})
onActivated(()=>{
  console.log(`子组件2 ->OnActived`)

})
</script>
<template>
  <div>
   子组件2 
  </div>
</template>
<style>

</style>