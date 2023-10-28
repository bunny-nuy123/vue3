<template>
  <div>
    子组件3
    <button @click="()=>$emit('customEvent')">btn</button>
    <button @click="handleClickEvent">btn2</button>
  </div>
</template>
<script setup>
const emit = defineEmits({
  customEvent:(params,arg2)=>{
    //key:value
    //key:自定义事件名称
    //value:对自定义事件参数的校验,值为function 
    console.log(`params,arg2->`,params,arg2)
   // 根据具体事件 进行判断校验 看别人封装的校验规则  具体校验逻辑自己写
    return true
  }
})

const handleClickEvent = ()=>{
  // btn2 触发 就要定义下emit btn1是自带的$emit
     emit('customEvent','nihao',{name:'lisi'})
}
</script>
<style lang="scss" scoped>
</style>