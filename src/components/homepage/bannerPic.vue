<template>
<div class="banner-Pic">
         <a href="#" v-for="(item,index) in array">
            <img :src="item.src">
         </a>
      </div>
</template>

<script>

  export default {
    name:"bannerPic",
    data(){
        return {
            array:[ 
                {
                src: require('../../../public/img/6632df7818b40b6e55b722322f660d66.png')
                }
            ]
        }
    } 
}

</script>

<style scoped>
/* bannerPic */
.banner-Pic img{
    width: 100%;
}
</style>
