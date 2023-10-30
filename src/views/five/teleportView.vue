<template>
  <div>
    <ChildOneView></ChildOneView>
    <div>
      <div>
        <div class="header"></div>
      </div>
    </div>
    <button @click="isShow = !isShow">{{ isShow }}</button>
    <!-- to 值 可以是一个css选择器 也可以是一个dom元素 -->
    <!-- :disabled="true"  disabled 不可用  就是传给自身 -->
    <!-- <div v-if="isShow">
      <teleport to='.header' :disabled="isDisabled">
        <div>这是被传送的dom {{ msg }}</div>
      </teleport>>
    </div> -->

    <!-- 传送到childOne 中 id=demo 中去 -->
    <div v-if="isShow">
      <teleport to='#demo' :disabled="isDisabled">
        <div>这是被传送的dom {{ msg }}</div>
      </teleport>>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ChildOneView from './ChildOneView.vue';
const msg = ref('hello')
const isDisabled = ref(false)
const isShow = ref(false)
</script>
<style lang="scss" scoped></style>