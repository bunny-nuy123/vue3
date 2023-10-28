<template>
  <div>
    子组件3
    <!-- <input type="text" v-model="value"> -->
    <!-- <input type="text" :value="title" @input="handleInputEvent"> -->
    <!-- <input :value="modelValue" @input="handleUpperText"> -->
    <input :value="title" @input="handleUpperText">
  </div>
</template>
<script setup>
import {computed,onMounted} from 'vue'
const props = defineProps(['modelValue','title','modelModifiers','titleModifiers'])
// const props = defineProps({
//      modelModifiers:{
//       type:Object,
//       default:()=>{}
//      },
//      modelValue:{
//       type:String
//      }
// })
const emit = defineEmits(['update:title'])
// const emit = defineEmits(['update:modelValue'])
// const value = computed({
//   get(){
//     return props.title
//   },
//   set(val){
//     //触发事件
//     emit('update:title',val)
//   }
// })

// const handleInputEvent = (e)=>{
//   emit('update:title',e.target.value)
// }
// 添加修饰符
const handleUpperText = (e)=>{
  let v = e.target.value
//修饰符
  if(props.modelModifiers && props.modelModifiers.upper){
     v = v.toUpperCase()
    }
    // 有参数 有修饰符
  if(props.titleModifiers && props.titleModifiers.upper){
     v = v.toUpperCase()
    }
    //有修饰符
  if(props.modelModifiers && props.modelModifiers.mytrim){
    // 去掉空格.
    let reg0 = /^\s*|\s*$/g
    v = v.replace(reg0,'')
    }
 emit('update:title',v)
}

onMounted(()=>{
  console.log(`props->`,props.modelModifiers)//{upper: true}
})
</script>
<style lang="scss" scoped>
</style>