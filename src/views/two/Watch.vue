<template>
  <div>
    侦听器
    <button id="btn" @click="num++">{{ num }}</button>
    <button @click="obj.age++">{{ obj.age }}</button>
    <button @click="changeObjLikes">修改likes中的一个对象</button>
  </div>
</template>
<script setup>
import { ref,reactive,watch,watchEffect,watchPostEffect} from 'vue'

const num = ref(1)
const obj= reactive({
  name:'lisi',
  age:10,
  likes:[
   { id:1,
     like:'吃饭'
   },
   { id:2,
     like:'睡觉'
   }
  ]
})
// wacth (侦听数据源,calback,options)
//侦听器数据源类型
//1.ref
//2.reactive
//3.getter函数
//4.数组形式,必须使用函数形式写进去 [ref,reactive,getter]
// watch 默认的是懒执行,只有数据源发生改变才会触发回调
//watch 默认是深度监听
// 如果监听的数据源 是一个getter 函数,返回值是个对象的情况下就是浅监听,想要深度监听必须使用 deep: true //深度监听

//回调的触发时机:想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post'  
//              简写形式:watchPostEffect//没有显示声明监听 回调中用到水就监听谁



// 1.watch 默认是懒执行,只有数据源发生改变才会触发回调
// watch(num,(newVal,oldVal)=>{
//     console.log(`newVal->`,newVal)
//     console.log(`oldVal->`,oldVal)
// })

//2.reactive只用一个值就可以 侦听obj 对象的时候  新值旧值是一样的
// watch(obj,(val)=>{
//     console.log(`obj val->`,val.age)
// })

//3.getter 函数
// watch(
// ()=> obj.age,
// (val) => console.log(`obj val->`,val)
// )


//4.数组形式
// watch(
// [ num,
//   ()=> obj.age
// ],
// ([newAge,oldAge],[newNum,oldNum])=>{
//     console.log(`newVal->`,newNum,newAge)
//     console.log(`oldVal->`,oldNum,oldAge)
// }
// )


//默认是深度监听
// const changeObjLikes=()=>{
//   obj.likes[0].like  = "reading"
// }
// watch(obj,(val)=>{
//   console.log(`深度监听->val:`,val)
// })
//浅监听
// watch(
//    ()=>obj.likes,
//    (val)=>{console.log(`浅监听->val:`,val);},
//    { deep: true //深度监听
//     }
// )

//一进页面就立即侦听
// watch(num,(newVal,oldVal)=>{
//     console.log(`newVal->`,newVal)
//     console.log(`oldVal->`,oldVal)
// },{
//   immediate:true  // 立即侦听
// })

// watchEffect(()=>{
//   console.log(`num.value====>`,num.value)
// })

// 回调的触发时机
// watch(num,
//    (newVal)=>{
//     console.log(`newVal----->`,newVal)
//     console.log(`btn->`,document.getElementById('btn').innerText)
//    },
//    //回调的触发时机:想在侦听器回调中能访问被 Vue 更新之后的 DOM，你需要指明 flush: 'post'
//    {
//     flush:'post' // 手动配置 让Dom 先更新,回调后执行
//    }
// )


//没有显示声明监听
// 回调中用到谁 就监听谁
watchPostEffect(()=>{
  console.log(`output->val`,num.value)
  console.log(`output->obj`,obj.age)
  console.log(`btn->`,document.getElementById('btn').innerText)
})
</script>