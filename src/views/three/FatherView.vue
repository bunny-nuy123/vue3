<template>
  <!-- 事件 -->
  <div>
    <ChildThree
    @custom-event="handleCustomEvent"
    ></ChildThree>
  </div>
</template>
<script setup>
import ChildThree from './ChildThree.vue'

// const handleCustomEvent = (params,params2,params3)=>{
//      console.log("abc---->",params,params2,params3)
// }
const handleCustomEvent = (params,...params3)=>{
     console.log("abc---->",params,params3)
}

</script>
<style lang="scss" scoped>
</style>