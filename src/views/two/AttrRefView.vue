<template>
  <div>
    模板引用
    <input type="text" ref="input">
    <!-- 字符串 -->
    <div ref="divTag">这是一个div</div>
    <!-- 如果是个函数 需要v-bind 绑定 -->
    <div v-if="isShow" :ref="handleTag">函数式的ref</div>
    <!-- 点击卸载isShow 函数式的ref -->
    <button @click="isShow = !isShow">{{ isShow }}</button>
    <ul>
      <li ref="liItems" v-for="item in list" :key="item">{{ item }}</li>
    </ul>

    <ChildOne ref="ChildComp"></ChildOne>
    <OptionChildView ref="optionChildRef"></OptionChildView>
  </div> 
</template>
<script setup>
import  {ref,onMounted,watchEffect } from 'vue'
import ChildOne from './ChildOne.vue'
import OptionChildView from './OptionChildView.vue';
//原生的获取
// onMounted((  )=>{
//   console.log(document.getElementById('input'))
// })

//访问模板引用  通过组合式 API 获得该模板引用，我们需要声明一个同名的 ref
// divTag必须跟上边的div 里边 ref绑定的值保持一致
const divTag = ref(null)
const input = ref(null)
const isShow = ref(true)
const list = ref(10)
const ChildComp = ref(null)
const optionChildRef = ref(null)
// 数组中的dom (item拿到的值)循环遍历 可能跟list的里边的不一致
const liItems = ref([])
onMounted(() => {
  console.log(`output------>input.value`,input.value)
  // input.value.focus()
  // input.value.style.cssText= `color:red; font-size:30px;`

  console.log(`output------->divTag.value`,divTag.value)
  divTag.value.innerText = '新值'
  divTag.value.style.cssText = 
    ` font-size:20px;
     background-color:#fff00f;
     color:#333;
     padding-left:10px;
     `


  console.log(`liItems:`,liItems.value)
  console.log(`ChildComp:`,ChildComp.value)
  console.log(`ChildComp.msg:`,ChildComp.value.msg)
  console.log(`ChildComp.fn:`,ChildComp.value.fn)
  console.log("..................");
  console.log('optionChildRef.....>>>',optionChildRef.value);
  console.log('optionChildRef.....>>>',optionChildRef.value.title);
  optionChildRef.value.test()
})
//没有挂载就立即执行   需要加判断  想要访问dom 必须挂载
watchEffect(()=>{
  if(input.value){
    input.value.focus()
    console.log(`input.value.focus.....`,input.value.focus)
  }
})

const  handleTag= (e)=>{
console.log(`原生操作->e`,e)
// e.innerText = 'sssss'
}
</script>

<style lang="scss" scoped>  
  
</style>