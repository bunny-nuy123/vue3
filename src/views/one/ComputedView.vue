<template>
  <!-- 计算属性打印了一次,具有缓存 -->
  <div>{{ doubleNum }}</div>
  <div>{{ doubleNum }}</div>
  <!-- 方法,没有缓存,打印了三次 -->
  <div>{{ doubleNumN() }}</div>
  <div>{{ doubleNumN() }}</div>
  <div>{{ doubleNumN() }}</div>
  <div>{{ fullName }}</div>
</template>

<script setup>
//计算属性是依赖响应式派生的一个新数据
// 计算属性是一个 只读ref
import { ref , computed,isReadonly} from 'vue'


const num = ref(10)
const doubleNum = computed(() =>{
  console.log(`计算属性->`)//打印一次
  return num.value *10
})


console.log(doubleNum.value);//100
console.log(isReadonly(doubleNum))//true

//计算属性缓存 vs 方法
const doubleNumN = ()=>{
  console.log("方法...");//打印了三次
  return num.value *2
}


//计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：
const firstName = ref('Li')
const lastName = ref('Ming')

const fullName = computed({
  get(){
     return firstName.value + " " + lastName.value  },
  set(val){
    //  console.log("val====>",val);
    [firstName.value,lastName.value] = val.split(' ')
  }
})

fullName.value = "WYa"
</script>

<style lang="scss" scoped>

</style>