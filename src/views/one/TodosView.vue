<template>
  <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
        <!-- 输入框 input事件change 写的内容添加给下边的todoList  -->
				<input class="new-todo" placeholder="What needs to be done?" autofocus @change.enter="handleNewTodo">
			</header>
			<!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
        <!-- 全选反选 -->
				<input id="toggle-all" class="toggle-all" type="checkbox" @click="handleToggleAll">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<!-- These are here just to show the structure of the list items -->
					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
					<!-- <li :class="item.done?'completed':''" v-for="item in list" :key="item.id"> -->
					<li :class="{completed:item.done, editing:item.id === currentId}" v-for="item in list" :key="item.id">
						<div class="view">
              <!-- 对钩 -->
							<input class="toggle" type="checkbox" v-model="item.done">
              <!-- 通过 $event 参数可以访问原生事件对象,其中包含了事件发生时的所有信息和参数 -->
							<label @click="handleDbclick(item,$event)">{{ item.text }}</label>
							<button class="destroy" @click="handleDeleteById(item.id)"></button>
						</div>
						<input class="edit" :value="item.text" @keyup="handleEditEvent">
            <!-- 双击事件回显的是要编辑的内容 下一步获取焦点focus -->
					</li>
				</ul>
			</section>
			<!-- This footer should be hidden by default and shown when there are todos -->
			<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>{{ leftNum }}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a :class="flag === 'All' ? 'selected':''" href="#/" @click.prevent="handleItem('All')">All</a>
					</li>
					<li>
            <!-- 动态添加边框的颜色 选中就变红 -->
						<a :class="flag === 'Active' ? 'selected':''" href="#/active" @click.prevent="handleItem('Active')">Active</a>
					</li>
					<li>
						<a :class="flag === 'Completed' ? 'selected':''" href="#/completed" @click.prevent="handleItem('Completed')">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" @blur="handleBlur" @click="handleClear">Clear completed</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<!-- Remove the below line ↓ -->
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<!-- Change this out with your name and url ↓ -->
			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
</template>
<script setup>
import {ref,computed,nextTick} from 'vue'
const todoList  = ref([
  {
    id:1,
    text:'唱歌',
    done:true
  },
  {
    id:2,
    text:'跑步',
    done:true
  },
  {
    id:3,
    text:'跳舞',
    done:false
  }  

])
// 处理全选还是反选
 const handleToggleAll=(e) =>{
  //打印出来的e 下边的target,有个checked代表选中不选中
  console.log("e===>",e.target.checked);
  // 对所有勾选按钮进行遍历 ,让 全选 等于done 
  todoList.value.forEach(item=>{
  item.done = e.target.checked
  })
 }

//  添加事件
const handleNewTodo=(e) =>{
  console.log(`e->`,e.target.value)
  todoList.value.push({
    id:Date.now(),//拿到当天的事件
    text:e.target.value,
    done:false
  })
  //清空输入框
  e.target.value = ""
}
// 剩余事件没有做
const leftNum = computed(()=>{
  return todoList.value.filter(item => !item.done).length
})
// 过滤已完成还是未完成,全部
const flag = ref('All')
const list = computed(()=>{
  if( flag.value === 'Active'){
    return todoList.value.filter(item => !item.done)
  }else if( flag.value === 'Completed'){
    return todoList.value.filter(item => item.done)
  }else{
    return todoList.value
  }
})
// 清除已完成的事件
const handleClear = () =>{
  todoList.value = todoList.value.filter(item => !item.done)
}
//处理全部 未完成 已完成
const  handleItem = (val)=>{
 flag.value = val
}

// 添加双击事件 dbclick
const currentId = ref('')

const handleDbclick=async (done,e)=>{
  //已完成的不能编辑
  if(done.done){
    alert("已完成的不能编辑")
    return
  }
console.log(`双击事件->`,done)
currentId.value = done.id

// 从父节点获取兄弟元素
console.log(`e->`,e.target.parentNode.nextSibling)
// dom更新的时机 
await nextTick()
e.target.parentNode.nextSibling.focus()
}

//按下输入框,按下回车键要获取到输入的内容, 编辑的内容要加进去,编辑状态消失
const handleEditEvent=(e)=>{
    console.log(e.keyCode);
    //回车按下code码是13
    if (e.keyCode===13) {
     const item = todoList.value.find(item => item.id = currentId.value)
     item.text = e.target.value
     //清空编辑状态
     currentId.value = ''
    } else if(e.keyCode === 27){
      //消去编辑状态
      currentId.value = ''
    }
}
//失去焦点
const handleBlur=()=>{
  currentId.value = ''
}

//删除
const handleDeleteById=(id)=>{
  todoList.value = todoList.value.filter(item=> item.id !== id)
}
</script>
<style lang="scss" scoped>
  
</style>