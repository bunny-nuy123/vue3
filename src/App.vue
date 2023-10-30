<script setup>
// 组合式api语法糖
// import DemoView from '@/views/one/DemoView.vue'
// import OptionsView from '@/views/one/OptionsView.vue'
// import CompositonView from '@/views/one/CompositonView.vue'
// import RefView from '@/views/one/RefView.vue'
// import ReactiveView from './views/one/ReactiveView.vue';
// import ComputedView from './views/one/ComputedView.vue';
// import TodosView from './views/one/TodosView.vue'
// import InputView from './views/two/InputView.vue';
// import LifeView from './views/two/LifeView.vue';
// import {onErrorCaptured} from 'vue'
// onErrorCaptured((err,instance,info)=>{
//   console.log(`app.vue err....`,err)
//   console.log(`app.vue instance->`,instance)
//   console.log(`app.vue info->`,info)
//   })
// import watch from '@/views/two/watch.vue';
// import AttrRefView from './views/two/AttrRefView.vue';
// import FatherView from './views/two/FatherView.vue';
// import FatherView from './views/three/FatherView.vue';
// import OptionChildView from './views/two/OptionChildView.vue';
// import ModelView from './views/three/ModelView.vue';
import AttributesView from './views/three/AttributesView.vue';
import SlotView from './views/three/SlotView.vue';

import GrandView from './views/four/GrandView.vue';
import AsyncView from './views/four/AsyncView.vue';
import MouseViewVue from './views/four/MouseView.vue';
import Directive from './views/four/Directive.vue';
import PluginView from './views/four/PluginView.vue';
import keepView from './views/five/keepView.vue';
import teleportView from './views/five/teleportView.vue';
import suspenseView from './views/five/suspenseView.vue';
</script>

<template>
<!-- <DemoView></DemoView> -->
<!-- <div>-----------------------</div> -->
<!-- <OptionsView></OptionsView> -->

<!-- <CompositonView></CompositonView> -->
<!-- <RefView></RefView> -->
<!-- <ReactiveView></ReactiveView> -->
<!-- <ComputedView></ComputedView> -->
<!-- <TodosView></TodosView> -->
<!-- <InputView></InputView> -->
<!-- <LifeView></LifeView> -->
<!-- <watch></watch> -->
<!-- <AttrRefView></AttrRefView> -->
<!-- <FatherView></FatherView> -->
<!-- <OptionChildView></OptionChildView> -->
<!-- <ModelView></ModelView> -->
<!-- <AttributesView></AttributesView> -->
<!-- <SlotView></SlotView> -->

<!-- <GrandView></GrandView> -->
<!-- <AsyncView></AsyncView> -->
<!-- <MouseViewVue></MouseViewVue> -->
<!-- <Directive></Directive> -->
<!-- <PluginView></PluginView> -->
<!-- <keepView></keepView> -->
<!-- <teleportView></teleportView> -->
<!-- <suspenseView></suspenseView> -->


<!-- routerview 内置组件  -->
<!-- 给routerview 加缓存 -->
<RouterView v-slot="{Component,route}" >
  <!-- <pre>route :  {{ route }}</pre> -->
<keepAlive>
 <component :is="Component"></component>
</keepAlive>
</RouterView>

<!-- to 就是path 自定义routerlink不想要变成a标签就必须添加custom, v-slot可以结构出来router,href,navigate -->
<RouterLink to="/about" custom v-slot="{router,href,navigate}">
<!-- <pre>{{ slotProsp }}</pre> -->
<!-- 想让about跳转 就需要绑定click 事件 href属性  循环遍历的时候就会用到-->
<div @click="navigate" :href="href" style="color: blue;">about</div>
</RouterLink>

<RouterLink to="/" style="margin-left: 50px;">去首页 </RouterLink>
</template>

<style >

</style>
