<template>
  <div>
    <ul class="contianer">
      <li v-for="item in list" :key="item.id">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script setup>
import axios from 'axios'
import {ref,onMounted} from 'vue'
const props = defineProps(['url'])
const list = ref([])

onMounted(async()=>{
  const res = await axios({
    url:props.url
  })

  console.log(`output-res`,res)
  list.value = res.data.data.items
})
</script>
<style lang="scss" scoped>
.contianer {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .item {
    width: 48%;
    margin-bottom: 40px;
  }
}
</style>