<template>
    <div>
        <ChatTop></ChatTop>
        <Fixed></Fixed>
        <div style="clear:both"></div>
        <RecommendList></RecommendList>
        <Tabbar style="position:fixed;bottom:0"></Tabbar>
    </div>
</template>

<script>

    import ChatTop from '../components/chat/chatTop.vue'
	import Fixed from '../components/homepage/fixed.vue'
    import RecommendList from '../components/recommend/recommendList.vue'
	import Tabbar from '../components/common/tabbar.vue'

    export default {
    name:'Chat',
    components:{
        ChatTop,
        Fixed,
        RecommendList,
        Tabbar
    }

}

</script>

<style scoped>

</style>
