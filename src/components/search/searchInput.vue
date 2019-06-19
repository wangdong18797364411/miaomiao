<template>
    <header>
        <div class="inputPre">
            <span class="icon-Header">
                <i class="iconfont ">&#xe60d;</i>
            </span>
            <span class="proName">龟仙人</span>
        </div>
        <div class="OB-width" style="
        width:100%;height: 5px ;clear: both;" ></div>
    </header>
</template>

<script>
    export default {
    name:"searchInput",

}

</script>

<style scoped>
header{
    width: 100%;
    height: .51rem;
    border-bottom: 1px solid #d9d9d9;
    background: #f2f2f2;
    padding: .06rem .14rem;
    box-sizing:border-box ;
}
header .inputPre{
    text-align: center;
    border-radius: .08rem;
    background-color: pink;
    height: .38rem;
    width: 100%;
    color: #9c9c9c;
    font-size: .16rem;
}
header .inputPre .proName{
    line-height: .38rem;
    vertical-align: middle;
}
header .inputPre .icon-Header{
    text-align: center;
}
header .inputPre .icon-Header .iconfont{
    vertical-align: middle;
    text-align: center;
    display: inline-block;
    font-size: .2rem;
    width: .2rem;
    height: .2rem;
    font-family: icomoon-subjects;
}
</style>
