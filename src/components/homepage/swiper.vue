<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in array" :key="index" >
          <img :src="item.src">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <slot name="pagination"></slot>
  </div>
</template>

<script>
	import Swiper from 'swiper';
  import "../../../node_modules/swiper/dist/css/swiper.css";
	import "../../../node_modules/swiper/dist/js/swiper.js";
  
	export default {
    name:"swiper",
    props:{
      return:{
         banners:{
         type:Array,
         default:[]
        }
      }
     
    },
    mounted() {
				new Swiper (this.$refs.swiperContainer,{
					 pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
           },
           　autoplay:{
      　　　　delay: 3000,
      　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
      　　},
      　　loop: true,
      　　navigation :{
      　　　　nextEl: '.swiper-button-next',
      　　　　prevEl: '.swiper-button-prev'
      　　}
				})
			
    },
    data(){
			return {
				array:[ 
					{
					src: require('../../../public/img/055badcfd101e5a665dbb15d915ac834.png')
					},
          	{
					src: require('../../../public/img/7b766b80afcde6bbd7a6174b31a594dd.png')
					},
          	{
					src: require('../../../public/img/6632df7818b40b6e55b722322f660d66.png')
					},
          	{
					src: require('../../../public/img/055badcfd101e5a665dbb15d915ac834.png')
					}
				]
      }

    }
 
}


</script>

<style scoped>
	.swiper-slide img{
    width:100%;
  }
</style>
