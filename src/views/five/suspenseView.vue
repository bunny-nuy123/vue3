<template>
  <div>
    <Suspense
     @pending="handlePending"
     @fallback="handleFallback"
     @resolve="handleResolve"
    >
          <testDemoView></testDemoView>
          <template #fallback>
            <div>
              loading....
            </div>
          </template>
    </Suspense>

  </div>
</template>
<script setup>
import testDemoView from './testDemoView.vue';

const handlePending= ()=>{
  console.log(`handlePending-....`)
}
const handleFallback= ()=>{
  console.log(`handleFallback-....`)
}
const handleResolve= ()=>{
  console.log(`handleResolve-....`)
}
</script>
<style lang="scss" scoped>
</style>