<template>
  <div>
    <!-- <slot :abc="msg" :a="10" :b="true"></slot> -->
     <slot name="test" :abc="msg" a="19"></slot>
     <slot  abc="xvdghjkdsg" title="biaoti"></slot>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const msg = ref('你好')
</script>
<style lang="scss" scoped>
</style>