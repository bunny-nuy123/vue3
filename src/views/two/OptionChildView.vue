<template>
  <div>
    选择式书写风格
  </div>
</template>
<script>
import {ref } from 'vue'
export default{
  setup(){
    const title = ref('title str')
    return {
      title
    }
  },
  methods:{
    test(){
      console.log('test.....');
    }
  }
}
</script>