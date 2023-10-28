<template>
  <input :value="modelValue" @input="handleInputEvent" />
</template>
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleInputEvent = (e)=>{
  emit('update:modelValue',e.target.value)
}
</script>
<style lang="less" scoped></style>