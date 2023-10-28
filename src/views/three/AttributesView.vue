<template>
  <!-- 一个组件没有被声明的组件 就是透传 -->
  <div>
    透传
    <son class="bg" style="font-size: 20px;" title="你好"></son>
  </div>
</template>
<script setup>
import son from './components/son.vue';

</script>
<style lang="scss" scoped>
.bg{
  background-color: pink;
}
</style>