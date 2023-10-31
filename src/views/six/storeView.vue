<template>
  <div>
  {store}
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user.js';
const userStore = useUserStore()
</script>
<style lang="scss" scoped>
</style>