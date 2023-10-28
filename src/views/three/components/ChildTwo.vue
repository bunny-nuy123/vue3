<template>
  <div>
    子组件2 
    <input type="text" v-model="val">
  </div>
</template>
<script setup>
import {computed} from 'vue'
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const val = computed({
  get(){
    return props.modelValue
  },
  set(val){
    //触发事件
    emit('update:modelValue',val)
  }
})
</script>
<style lang="scss" scoped>
</style>