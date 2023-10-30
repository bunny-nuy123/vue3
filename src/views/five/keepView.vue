<template>
  <!-- 组件缓存 -->
  <div>
    组件缓存
    <input type="radio" v-model="currentComp" :value="ChildOneView">ChildOneView
    <input type="radio" v-model="currentComp" :value="ChildTwoView">ChildTwoView
    <!-- include 值可以是字符串 正则表达式(需要加上v-bind) 数组[字符串 正则表达式] -->
    <!-- <keep-alive include="ChildOneView,ChildTwoView">
      <component :is="currentComp"></component>
    </keep-alive> -->

    <!-- <keep-alive :include="/ChildOneView|ChildTwoView/">
      <component :is="currentComp"></component>
    </keep-alive> -->

    <!-- <keep-alive :include="['ChildOneView','ChildTwoView']">
      <component :is="currentComp"></component>
    </keep-alive> -->
    <!-- 除了childOne不会缓存 其他都会缓存 exclude用得少-->
    <!-- <keep-alive exclude="ChildOneView">
      <component :is="currentComp"></component>
    </keep-alive> -->
    


    <!-- max 设置最大缓存值5 如果第六个想要进去 会自动把长时间没有被激活的拿出来,把第六个拿进来-->
    <keep-alive max="5">
      <component :is="currentComp"></component>
    </keep-alive>
  </div>
</template>
<script setup>
import ChildOneView from './ChildOneView.vue';
import ChildTwoView from './ChildTwoView.vue'
import {shallowRef} from 'vue'
const currentComp = shallowRef(ChildOneView)
</script>
<style lang="scss" scoped>
</style>