<template>
  <div>
    <div>{{ $t('datepicker.Today') }}</div>
  </div>
</template>
<script setup>
import {inject} from 'vue'
const l =inject("language")
console.log(`output->l`,l)
</script>
<style lang="scss" scoped>
</style>