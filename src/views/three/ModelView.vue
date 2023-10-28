<!-- <template>
  <div>
    组件上的v-model
    <div>{{ msg }}</div>
     // 原生的写法 -->
    <!-- <input :value="msg" @input="($event)=>msg = $event.target.value"> -->


    <!-- <ChildOne v-model="msg"></ChildOne> -->


    <!-- <ChildOne :model-value="msg" @update:model-value="(val)=>msg=val"></ChildOne> -->


    <!-- <ChildOne :model-value="msg" @update:model-value="handleUpdateModelValEvent"></ChildOne>
  </div> -->
<!-- </template>
<script setup>
import ChildOne from './components/ChildOne.vue';
import {ref} from 'vue'
const msg = ref('')

const handleUpdateModelValEvent=(val)=>{
  msg.value = val
}
</script>
<style lang="scss" scoped>
</style> -->



<!--2. 计算属性写法 -->
<!-- <template>
  <div>
    计算属性 组件上的v-model
    <div>{{ msg }}</div>
    <ChildTwo v-model="msg"></ChildTwo>
  </div>
</template>
<script setup>
import ChildTwo from './components/ChildTwo.vue';
import {ref} from 'vue'
const msg = ref('')


</script>
<style lang="scss" scoped>
</style> -->


<!-- 3.自定义 -->
<template>
  <div>
    自定义组件上的v-model
    <div>{{ msg }}</div>

    <!-- 给model加一个属性 -->
    <!-- <ChildThree v-model:title="msg"></ChildThree> -->

    <!-- 修饰符 -->
    <!-- <ChildThree v-model.upper="msg"></ChildThree> -->
    <!-- <ChildThree v-model.mytrim="msg"></ChildThree> -->
   <!-- 既有修饰符 又有参数 -->
    <ChildThree v-model:title.upper="msg"></ChildThree>
  </div>
</template>
<script setup>
import ChildThree from './components/ChildThree.vue';
import {ref} from 'vue'
const msg = ref('')


</script>
<style lang="scss" scoped>
</style>