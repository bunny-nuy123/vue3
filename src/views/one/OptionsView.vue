<template >
  <div>
   选项式风格
   <div>{{ couter }}</div> 
   <button @click="couter++">{{ couter }}</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default{
  setup(){
    const couter = ref(0)
    return{
      couter
    }
  },
  methods:{
 
  },
  components:{

  },
  computed:{},
  filters:{}
}
</script>

<style  scoped>

</style>