<template>
	<div class="bod">
		<topHomePage></topHomePage>
		<Fixed></Fixed>
		<div class="bodyContent">
			<banner></banner>
			<timeList></timeList>
			<OBwidth></OBwidth>
			<newTit></newTit>
			<Xscroll></Xscroll>
			<bannerPic></bannerPic>
			<shoppingList></shoppingList>
		</div>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import topHomePage from '../components/homepage/topHomePage.vue'
	import Fixed from '../components/homepage/fixed.vue'
	import banner from '../components/homepage/swiper.vue'
	import timeList from '../components/homepage/timeList.vue'
	import OBwidth from '../components/homepage/OB-Width.vue'
	import newTit from '../components/homepage/newTit.vue'
	import Xscroll from '../components/homepage/X-scroll.vue'
	import bannerPic from '../components/homepage/bannerPic.vue'
	import shoppingList from '../components/homepage/shoppingList.vue'
	import tabbar from '../components/common/tabbar.vue'

	export default {
		name:'Homepage',
		components:{
			topHomePage,
			Fixed,
			banner,
			timeList,
			OBwidth,
			newTit,
			Xscroll,
			bannerPic,
			shoppingList,
			tabbar
		}
	}
</script>

<style >
.bod{
	display: -webkit-flex;
	/* -webkit-flex-direction:column; */
	flex-direction: column;
    height: 100%;

}
	.bodyContent{
	width: 100%;
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
}	
</style>