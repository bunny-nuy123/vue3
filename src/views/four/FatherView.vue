<template>
  <div>
    父亲
    <SonView :abc="msg"></SonView>
  </div>
</template>
<script setup>
import SonView from './SonView.vue'
const props = defineProps(['msg'])
</script>
<style lang="scss" scoped>
</style>