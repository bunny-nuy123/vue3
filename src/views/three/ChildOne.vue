<!-- <template>
  <div>
    子组件1
    <div>{{ msg }}---{{ age }}---{{ flag }}---{{ obj }}--{{ arr }}</div>
    <button @click="updateAge">{{ myAge }}</button>
    <div>{{ doubleAge }}</div>
  </div>
</template>
<script setup>
import {ref,computed} from 'vue'
const props = defineProps(['msg','age','flag','obj','arr'])
// console.log(props.msg)
// console.log(typeof props.age)//number 类型
// console.log(typeof props.flag)//布尔类型
// console.log(typeof props.obj)// 对象
// // console.log(typeof props.arr)//对象
// console.log( props.arr instanceof Array)//true 数组类型
// console.log(props.obj.name)//赵四

//响应式 要 .value
console.log(props.msg.value)
console.log(typeof props.age.value)//number 类型
console.log(typeof props.flag.value)//布尔类型
console.log(typeof props.obj.value)// 对象
console.log( props.arr.value instanceof Array)//true 数组类型
console.log(props.obj.value.name)//赵四

//1. 改变局部年龄的值,只是在子组件变了 只是用了初始值19 ,父组件还是19, 
const myAge= ref(props.age)
const updateAge =()=>{
myAge.value++
}

//2. 计算属性 改变初始值,想要用父组件的值,还不能修改父组件的值
const doubleAge = computed(()=>props.age * 2)
</script>
<style lang="scss" scoped>
</style> -->