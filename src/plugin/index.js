import ChildTwo from '@/views/three/ChildTwo.vue';
// import ChildOne from '@/views/three/ChildOne.vue';

const comps = {ChildTwo}

export  const registerComp = {
  install(app,options){
    // console.log(`output->options`,options)
    for (const comp in comps) {
     app.component(comp,comps[comp])
    }
  }
}