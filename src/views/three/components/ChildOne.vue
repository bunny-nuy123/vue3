<template>
  <div>
    zi组件1
    <!-- 1.行内式 -->
    <!-- <input :value="modelValue" @input="($event)=>$emit('update:modelValue',$event.target.value)"> -->
    <!-- 2.内敛式 -->
    <input :value="modelValue" @input="handleInputEvent">
  </div>
</template>
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleInputEvent= (e)=>{
  emit('update:modelValue',e.target.value)
}
</script>
<style lang="scss" scoped>
</style>