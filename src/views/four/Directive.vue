<template>
  <div>
    自定义指令
    <button @click="num++">{{ num }}</button>
    <!-- isshow值为false 就会从DOM数移除 -->
    <button @click="isShow = !isShow">{{ isShow }}</button>
    <!-- <input type="text" v-focus v-if="isShow"> -->
    <div v-example:foo.bar="num">这是一个div 打印 binding</div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
//(el) => el.focus()代替 updated,mounted   两个钩子    的 简写形式 
// const vFocus = (el)=> {
//   el.focus()
// }

// const vFocus ={
//   updated(el) {
//    
//   },
//   //在mounted可以自动获取焦点
//   mounted(el) {
//     el.focus()
//   },
// }
const num = ref(10)
const isShow = ref(true)
const vExample = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) {
    // 下面会介绍各个参数的细节
    console.log("created...")
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {
    console.log("beforeMount...")
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {
    console.log("mounted...")
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log(`beforeUpdate->`)
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
    console.log(`updated->`,binding)
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.log(`beforeUnmount->`)
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {
    console.log(`unmounted`)
  }
}


// 7个生命周期钩子 执行的是
//   - created...
//   - beforeMount...
//   - mounted...
//   当值num 改变的时候会触发
//   - beforeUpdate...
//   - updated...
//   移除输入框 值为false 就不显示输入框
//   - beforeUnmount...
//   - unmounted...
</script>
<style lang="scss" scoped>
</style>

