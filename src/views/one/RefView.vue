<template>
  <div>
    {{ num }}
    <button @click="changeNum">{{ num }}</button>
    <!-- <p>------------hello 翻转变大写-----------------</p> -->
    <div>{{ str }}</div>
    <button @click="changeStr">{{ str }}</button>
    <!-- <p>布尔类型-----------------</p> -->
    <div>{{flag}}</div>
    <button @click="flag = !flag">{{ flag }}</button>
    <!-- <p>ref对象类型----------------------------</p> -->
    <div>{{ person.name }}  ----{{ person.age }}---{{ person.likes[0].name }}</div>
     <button @click="personChange">改变年龄{{ person.age }}</button>
     <button @click="ChangeLikes">改变爱好</button>
     <p>-----------------------------</p>
     <div>{{ obj.bar.abc }}</div>
     <div>{{ obj.bar.name }}</div>
    <button @click="changeObj">修改浅响应</button>
  </div>
</template>

<script setup>
//1.1
import { ref,shallowRef,isRef } from 'vue'
//1.2 数据响应 ref reactive
const num = ref(10)

//1.3 js想要访问ref  需要用.value
console.log("num------>",num.value);



// 2.点击button按钮给事件添加绑定事件
function changeNum(){
  num.value++
  // num++//这是错误的 常量不能直接赋值
}
// 翻转变大写
const str = ref('hello')
function changeStr() {
  str.value  =   str.value.split('').reverse().join('').toUpperCase()
}

// 布尔类型
const flag = ref(true)

// 对象类型  ref包装的值默认是深度响应的
const person = ref({
  name:'王五',
  age:'12',
  likes:[
          {
          id:1,
          name:'打篮球',
          skill:[
              {
               skill: "xxx"
              }
          ]
          },
          {
          id:2,
          name:'看电视'
          },
          {
          id:3,
          name:'跑步'
          },
        ]
})
function personChange() {
  person.value.age++
} 
function ChangeLikes(){
  person.value.likes[0].name = '游泳'
}


//ref 浅响应 只有value本身改变才可以改变 
const obj = shallowRef({
  name:'name',
  bar:{
    abc:'abc'
  }
})
function changeObj() {
  // 数据在vue更新了 但是页面没有改变
  // obj.value.bar = 'hello---------abc'
  obj.value = {
    name:'李四',
    bar:{
      abc:'字母'
    }
  }
}

//idRef  原始值和响应对象
function text(val) {
  // console.log("text(ref(8))------>",isRef(val));
   console.log("text(10)------>",isRef(val));
   //不管怎么传值都可以拿到想要的值
if(isRef(val)){
  console.log(val.value);
}else{
  console.log(val);
}
}
// text(ref(8))
// text(10)



// 原始值不等于 响应式对象
const raw = {}
const obj2 = ref(raw)
console.log("raw === obj2----->",raw == obj2);
</script>

<style lang="scss" scoped>
</style>