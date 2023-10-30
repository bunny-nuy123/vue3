<template>
  <div>
    组件2
    <input v-model="msg" />
  </div>
</template>
<script setup>
import {ref,onActivated,onDeactivated,onBeforeMount,onMounted} from 'vue'
const msg = ref('')

onBeforeMount(() => {
  console.log(`TWO onBeforeMount----->`)
})

onMounted(() => {
  console.log('TWO onMounted......') 
})
onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log(`TWO onActivated----->`)
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('TWO onDeactivated......') 
})
</script>
<style lang="scss" scoped>
</style>