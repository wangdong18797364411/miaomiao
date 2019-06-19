<template>
    <div>
        <PersonTop></PersonTop>
        <Mine></Mine>
        
        <div style="clear:both"></div>
        <Fixed></Fixed>
        <RecommendList></RecommendList>
        <Tabbar style="position:fixed;bottom:0"></Tabbar>
    </div>
</template>

<script>
	import PersonTop from '../components/person/personTop.vue'
	import Mine from '../components/person/mineList.vue'
	import Fixed from '../components/homepage/fixed.vue'
	import RecommendList from '../components/recommend/recommendList.vue'
	import Tabbar from '../components/common/tabbar.vue'

    export default {
    name:'person',
    components:{
        PersonTop,
        Mine,
        Fixed,
        RecommendList,
        Tabbar
    }

}

</script>

<style scoped>

</style>
