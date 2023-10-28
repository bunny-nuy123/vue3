<template>
  <div>
    儿子
 <div class="demo">hello</div>
    <!-- <pre>{{$attrs}}</pre>
    <div v-bind="$attrs">inner</div>
    <div v-bind:style="$attrs.size">大小</div>
    <button v-bind:title="$attrs.title">按钮</button> -->
  </div>
  <!-- 多个跟标签 -->
  <!-- <div v-bind="$attrs">1</div>
    <div v-bind="$attrs">二</div> -->
</template>
<script setup>
import grandSon  from './grandSon.vue'
// defineProps(['class','style','title'])
import { useAttrs } from 'vue'
defineOptions({
  //阻止透传
  inheritAttrs:false
})
// 组合式函数
const attrs = useAttrs()
console.log(`attrs.style----->`,attrs.style)
</script>
<style lang="scss" scoped>
// 子组件跟父组件样式合并
.demo{
  background-color: red;
  font-size: 90px;
}
</style>