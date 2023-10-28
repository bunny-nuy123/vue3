<!-- <template>
  <div>
    <div>父组件</div>
    常量
   // <ChildOne
    msg="hello world"
    :age="19"
    :flag="true"
    :obj="{name:'赵四',age:'30'}"
    :arr="[1,2,3]"
    ></ChildOne> 
<ChildOne v-bind="params"></ChildOne>
  </div>
</template>
<script setup>
import{ref} from 'vue'
import ChildOne from './ChildOne.vue';

const msg= ref('你好')
//非响应式 数据写死不能改变
const age= 19
// const age= ref(12)
const flag= ref(true)
const obj= ref({name:'赵四',age:'12'})
const arr= ref([1,2,3])
const params = {
  age,
  msg,
  flag,
  obj,
  arr
}
</script>
<style lang="scss" scoped>
</style> -->

<!-- 要声明对 props 的校验，你可以向 defineProps() 宏提供一个带有 props 校验选项的对象 -->
<template>
  <div>
    <ChildTwo msg="libai" title="报题" :num="20" :age="19"></ChildTwo>
  </div>
</template>
<script setup>
import ChildTwo from './ChildTwo.vue'
import {ref} from 'vue'

</script>
<style lang="scss" scoped>
</style>