<!-- <template>
  <div>
     <div>cha</div>
    <slotChild>{{ msg }}</slotChild>
   
  </div>
</template>
<script setup>
import slotChild from './components/slotChild.vue';
import slotChildTwo from  './components/slotChildTwo.vue'
import {ref}   from 'vue'
const msg = ref('你好')
</script>
<style lang="scss" scoped>
</style> -->

<!-- 具名插槽 -->
<template>
  <div>
    <button @click="slotName='test'">{{ slotName }}</button>
    <slotChildTwo >
      <!-- <template #silder>
        <div>
          <p>侧边</p> 
          <p>侧边</p> 
          <p>侧边</p> 
          <p>侧边</p> 
          <p>侧边</p> 
          <p>侧边</p> 
        </div>
      </template> -->
      <template #[slotName]>
        <div>
          <p>动态插槽</p>
        </div>
      </template>
      <template #nav>
        <div>
          <p>导航</p>
        </div>
      </template>
      <template #main>
        <div>
          <p>主页</p>
        </div>
      </template>
      <!-- 默认插槽  -->
      <template #default>
        <div>
          <p>底部</p>
        </div>
      </template>

      <!-- <p>都不好吃方便</p> -->
    </slotChildTwo>
  </div>
</template>
<script setup>
import slotChildTwo from  './components/slotChildTwo.vue'
import {ref}   from 'vue'
const msg = ref('你好')
const slotName = ref('sildebar')
</script>
<style lang="scss" scoped>
</style>