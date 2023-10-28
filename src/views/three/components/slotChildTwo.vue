<template>
  <!-- 具名插槽 -->
  <div>
    <div class="silde">
      <slot name="sildebar"></slot>
    </div>
    <div class="nav">
      <slot name="nav"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="footer">
      <slot ></slot>
    </div>
    <div class="test">
      <slot name="test"></slot>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
</style>