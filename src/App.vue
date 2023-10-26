<script setup>
// 组合式api语法糖
import DemoView from '@/views/one/DemoView.vue'
import OptionsView from '@/views/one/OptionsView.vue'
import CompositonView from '@/views/one/CompositonView.vue'
import RefView from '@/views/one/RefView.vue'
import ReactiveView from './views/one/ReactiveView.vue';
import ComputedView from './views/one/ComputedView.vue';
// import TodosView from './views/one/TodosView.vue'
import InputView from './views/two/InputView.vue';
import LifeView from './views/two/LifeView.vue';
// import {onErrorCaptured} from 'vue'
// onErrorCaptured((err,instance,info)=>{
//   console.log(`app.vue err....`,err)
//   console.log(`app.vue instance->`,instance)
//   console.log(`app.vue info->`,info)
//   })
import watch from '@/views/two/watch.vue';
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
<watch></watch>
</template>

<style >

</style>
