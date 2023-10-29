<template>
  <div>
    X:{{ x }},Y: {{ y }}
    <div>-----------------------------</div>
    <button @click="productId='1329337303982768129'">按钮</button>
    <div v-if="!data">
     loading.....
    </div>
    <div v-else-if="data">
     <pre> {{ data }}</pre>
    </div>
    <div v-else>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useMouse } from '@/utils/mouse.js'
import { useRequest } from '../../utils/request';
const { x, y } = useMouse()
const productId= ref("1329337303982768129")
// 组合式函数传递的3个方式  原始值 ,ref ,getter  一定要处理toValue
// const url =  'https://leju.bufan.cloud/lejuClient/product/productDetail/1328888841877159938'
const  url  =  ref('https://leju.bufan.cloud/lejuClient/product/productDetail/1328888841877159938')
const {data,error} = useRequest(()=>'https://leju.bufan.cloud/lejuClient/product/productDetail/'+ productId.value)
console.log(`data---------MouseView:->`,data)
</script>
<style lang="scss" scoped>
</style>


