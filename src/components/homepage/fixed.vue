<template>
    <div class="go-To-Add">
        <router-link  :to="path" class="app">去购物车</router-link>
    </div>
</template>

<script>
    export default {
        name:"fixed",
        data(){
            return{
                path:"/car"
            }
        }
	}
</script>

<style>

/* 去app下载 */
.go-To-Add{
    width: 90px;
    height: 32px;    
    font-size: 13px;
    text-align: right;
    color: #fff;
    background-color: #e02e24;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    z-index: 10001;
    position: fixed;
    top: 100px;
    right: 0;
}
.go-To-Add .app{
    height: 32px;
    width: 90px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    display: inline-block;
}
</style>