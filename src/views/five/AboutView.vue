<template>
  <div>
    AboutView
  </div>
</template>
<script setup>
import {useRoute,onBeforeRouteUpdate,onBeforeRouteLeave} from 'vue-router'
const route = useRoute()
console.log(route.query.a)
console.log(route.query.b)

// 当参数改变 才会执行onBeforeRouteUpdate
onBeforeRouteUpdate(()=>{
  console.log(`onBeforeRouteUpdate.......>`)
})
onBeforeRouteLeave(()=>{
  console.log(`onBeforeRouteLeave.......>`)
})

</script>
<style lang="scss" scoped>
</style>