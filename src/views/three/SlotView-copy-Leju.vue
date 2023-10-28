<template>
  <!-- 作用域插槽 -->
  <div>
    <!-- <slotChidThree v-slot="slotProps">
      <pre>{{ slotProps }}</pre>
      <div>{{ slotProps.abc }}</div>
      <div>{{ slotProps.a }}</div>
      <div>{{ slotProps.b }}</div>
    </slotChidThree>
    <div>-------------解构的方式------------</div>
    <slotChidThree v-slot=" {abc,a,b}">
      <div>{{ abc }}</div>
      <div>{{ a }}</div>
      <div>{{ b }}</div>
    </slotChidThree> -->
    <!-- 具名插槽 -->
    <!-- <slotChidThree> -->
      <!--简写形式:  #slot:test = "slotProps" -->
      <!-- <template v-slot:test = "slotProps">
        <pre>{{ slotProps }}</pre>
        <div>
          {{ slotProps.abc }}
        </div>
      </template>
    </slotChidThree> -->

    <!-- 既有匿名 又有具名插槽 要写两个template
     -->
    <!-- <slotChidThree>
      <template #default = "{abc,title}">
        <div>
          {{ abc }}----{{ title }}
        </div>
      </template>
      <template #test = "{abc,a}">
        <div>
          {{ abc }}----{{ a }}
        </div>
      </template>
    </slotChidThree> -->
    <FancyList :url="url">
       <template #item="slotPrams" >
        <img class="img" :src="slotPrams.pic" alt="">
        <div class="title">
          {{ slotPrams.name }}
        </div>
        <div class="info">
          <div class="price">${{ slotPrams.price }}</div>
          <div class="tag">乐居</div>
        </div>
       </template>
    </FancyList>
  </div>
</template>
<script setup>
import slotChidThree from './components/slotChidThree.vue';
import FancyList from './components/FancyList.vue';
const url = "http://leju.bufan.cloud/lejuClient/home/saleMostProducts"
</script>
<style lang="scss" scoped>
.img{
  width: 162px;
  height: 119px;
}
.title{
  width: 162px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info{
  display: flex;
  justify-content: space-between;
  .price{
    color: red;
  }
}
</style>