<template>
    <header>
        <div class="navs">
            <ul>
                <li>热门</li>
                <li>女装</li>
                <li>百货</li>
                <li>母婴</li>
                <li>秀宝</li>
                <li>手机</li>
                <li>电器</li>
                <li>男装</li>
                <li>食品</li>
                <li>运动</li>
                <li>内衣</li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
		name:"navs",
	}
</script>

<style>
	
.content .newList, .content ul{
    flex-shrink: 0;
    width: 100%;
}
.content{
	display: flex;
	overflow-x: auto;
	overflow-y: hidden;
}
/* header+fix */
header{
    width: 100%;
    height: 0.42rem;
}
header .navs{
 width: 100%;
 background: #fafafa;
 z-index: 1000;
 border-bottom: 1px solid #d9d9d9;
}
header .navs ul{
    height: 0.42rem;
    width: 100%;
    /* background: red; */
    display:-webkit-flex;
	justify-content: space-around;
    align-items: center;
    white-space: nowrap;
    box-sizing:border-box;
    overflow-x:auto;
    overflow-y:hidden;   
    padding: 0 .14rem;
}
header .navs ul li{
    height: .42rem;
    text-align: center;
    line-height: .42rem;
    color: rgb(68, 68, 68);
    font-size: .16rem;
    margin-left: .2rem;
    flex-shrink: 0;
    display: inline-block;
}
header .navs ul li:first-child{
    margin-left: 210px;
}
</style>