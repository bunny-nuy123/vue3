<template>
  <div>
    子组件2
    <div>{{ msg }} -----------------年龄:{{ age }} --{{ title }} ---{{ num }}</div>
    <!-- 对象类型 -->
    <div>{{ obj.name }}</div>
    <!-- 数组类型 -->
    <div>{{ arr }}</div>
    <div>{{ fn }}</div>
    <div>{{ Person }} </div>

  </div>
</template>
<script setup>
const props = defineProps({
  msg:{
    type:String,
    required:true // msg必须传
  },
  age:{
    type:Number,
    required:true, // msg必须传
    //自定义校验  返回true 成功 返回false失败
    validator(val){
      console.log(`val----------->`,val)
      
     if(val >35 || val<18){
        console.log('年龄大于35,小于18')
        return false
      }else{
        return true
      }
      
    }
  },
  title:{
    type:[String,Number]
  },
  num:{
    type:Number,
    // 父组件没有给num设置值 就用这里绑定的默认值17,给值就不用这个默认值
   default:17
  },
  //对象类型 父组件没有绑定obj值 默认是一个工厂函数 绑定了就显示绑定的值
  obj:{
    type:Object,
    default(rawProps){
      // 父组件没有传obj值 rawProps,可以拿到所有的值,msg,age,title....
      console.log(`obj,rawProps------>`,rawProps)
      return {name:'工厂函数'}
    }
  },
  //数组类型
  arr:{
    type:Array,
    default(rawProps){
      console.log(`Array rawProps->`,rawProps)
      return [1,2,3,3]
    }
  },
  //函数类型
  fn:{
    type:Function,
    default:()=> {
        return(123)
    }
  },
  // 面向对象 自定义类型

})


console.log(`output->props.fn`,props.fn)
props.fn()
</script>

<script>
// 自定义函数
class Person {
  constructor(name){
     this.name = name
   } 
}
</script>
<style lang="scss" scoped>
</style>