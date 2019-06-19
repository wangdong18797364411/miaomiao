<template>
    <div class="tabListRight-tit">
        <span >女装</span>
        <span class="sellHot">618狂欢热卖</span>
        <span class="more">查看更多</span>
    </div>
</template>

<script>
    export default {
    name:"tabListRightMore",

}
</script>

<style scoped>
/* 右边 */
.tabListRight{
    height: 100%;
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: aqua;
}
.tabListRight-tit{
    height: 40px;
    position: relative;
}
.tabListRight-tit .sellHot{
    left: 40px
}
.tabListRight-tit .more{
    right: 30px
}
.tabListRight-tit span{
    position: absolute;
    top: 10px
}
.tabListRight-tit span{
    font-size: 12px;
    color: #9c9c9c;
}
.tabListRight-tit .sellHot{
    background: red;
    color:yellow;
    border-radius: 3px;
}
</style>
