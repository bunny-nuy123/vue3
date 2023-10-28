<template>
  <div>
    <MouseMove #default="{x,y}">
      X:{{ x }}
      Y:{{ y }}
    </MouseMove>
  </div>
</template>
<script setup>
import MouseMove from './components/MouseMove.vue';
</script>
<style lang="scss" scoped>
</style>