<template>
    <div>
        <div style="clear:both"></div>
        <RecommendList></RecommendList>
        <Tabbar style="position:fixed;bottom:0"></Tabbar>
    </div>
</template>

<script>

    import RecommendList from '../components/recommend/recommendList.vue'
	import Tabbar from '../components/common/tabbar.vue'

    export default {
    name:'Recommend',
    components:{
        RecommendList,
        Tabbar
    }

}

</script>

<style scoped>
.Tabbar{
    position: fixed;
    bottom:0;
}
</style>
