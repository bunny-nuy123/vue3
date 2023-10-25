<template>
  <div>
    <div>{{ msg }}</div>
    <input v-model="msg">
    <!-- <input type="text" :value="msg"  @input="handleInput"> -->
    <!-- <textarea ></textarea>
    <input type="checkbox" checked @change="">
    <input type="radio" checked @change="">
    <select @change="" value="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select> -->
  </div>
</template>
<script setup>
import {ref} from 'vue'
const msg = ref('')
const handleInput=(e)=>{
  console.log("e==>",e);
msg.value = e.target.value
}
</script>

<style>
</style>