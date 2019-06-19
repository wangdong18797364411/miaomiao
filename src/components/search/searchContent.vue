<template>
<div class="tabList">
    <div class="tabListLeft">
        <searchLeft></searchLeft>
    </div>
    <div class="tabListRight">
        <!-- <tabListRightMore></tabListRightMore> -->
        <tabRightShoppingList></tabRightShoppingList>
    </div>
</div>
</template>

<script>
    import TabListRightMore from './tabListRightMore.vue'
    import TabRightShoppingList from './tabRightShoppingList.vue'
    import searchLeft from './searchLeft.vue'
    export default {
    name:"searchInput",
    components:{
        TabListRightMore,
        TabRightShoppingList,
        searchLeft
    }
}
</script>

<style scoped>
/* body */
.tabList{
    display:flex;
    justify-content: space-around;
    height:100%
}
/* 左边 */
.tabList .tabListLeft{
    background: #f2f2f2;
    box-sizing: border-box;
    display: flex;
    overflow-y: auto;
}
.tabList .tabListLeft li{
    width: 89px;
    height: .52rem;
    font-size: .15rem;
    text-align: center;
    line-height: .52rem;
}
/* 右边 */
.tabList .tabListRight{
    width: 2.86rem;
    background: #f2f2f2;
    box-sizing: border-box;
    display: flex;
    overflow-y: auto;
}
</style>
 