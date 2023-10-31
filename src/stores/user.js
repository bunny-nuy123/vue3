import { defineStore } from 'pinia'
  // defineStore
  // 参数1: id strore 的唯一值
  // 参数2: 选项
  // 返货只是一个函数
 // 返回值的命名规则 : use开头 store结尾 中间一般是id
 export  const useUserStore = defineStore("user",{
    // store 存放柜全局状态的地方 类似于组件中的data
    //  state 是一个函数 避免服务器渲染 数据交叉污染
    // 使用箭头函数 ts类型推断
    state:()=>{
      return{
        name:'栗子',
        age:12
      }
    },
    // 类似于组件的计算属性
    getters:()=>{

    },
    //类似于组件的方法
    actions:{}
  })