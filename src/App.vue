<template>

    <router-view/>
    
</template>
<script>
// import homepage from "./pages/homepage";
// import search from "./pages/search";
// import recommend from "./pages/recommend";
export default {
  name:'app',
    components: {
    // homepage,
    // search,
    // recommend
  },
  data(){
    return {
      flag:true
    }
  },
  methods:{
    handleToggle(status){
      this.flag = status;
    }
  }
}
</script>

<style lang="scss">

</style>
