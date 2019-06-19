<template>
    <div class="bod">
        <div class="bodyContent">
            <SearchInput></SearchInput>
            <SearchContent></SearchContent>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
    import SearchInput from '../components/search/searchInput.vue'
    import SearchContent from '../components/search/searchContent.vue'
    import Tabbar from '../components/common/tabbar.vue'

    export default {
    name:'search',
    components:{
        SearchInput,
        SearchContent,
        Tabbar
    }

}

</script>

<style scoped>
.bod{
	display: -webkit-flex;
	/* -webkit-flex-direction:column; */
	flex-direction: column;
    height: 100%;

}
	.tabList{
	width: 100%;
	flex: 1;
	overflow-x: hidden;
	overflow-y: auto;
}
</style>
