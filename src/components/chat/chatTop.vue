<template>
    <div class="chatTop">
        <div class="logo" v-for="item in list">
            <img :src="item.src" alt="">
            <span class="word">{{item.word}}</span>
            <span class="date">{{item.date}}</span>
        </div>
        <div style="clear:both"></div>
        <div class="choose">精选</div>
        <div style="clear:both"></div>
    </div>
</template>

<script >
    export default {
    name:'chatTop',
    data(){
        return {
            list:[
                {
                    src:require("../../../public/img/c3aaac9f-d97a-41de-b92f-31b9151bf659.png"),
                    word:"悠扬男装",
                    date:"2019/01/11"
                }
            ]
        }
    }

}

</script>

<style scoped>
.logo{
    padding-top:10px;
    overflow: hidden;
}
.logo img{
    width: 47px;
    height: 47px;
    float: left;
    margin-left: 10px;
    margin-right: 15px;
}
.logo .word{
    color:#333;
    font-size: 16px;
    display: block;
    float: left;
    line-height:47px;
}
.logo .date{
    color:#999;
    font-size: 12px;
    display: block;
    float: right;
    line-height:47px;
    margin-right: 5px;
}
.choose{
    display: block;
    color: red;
    background: white;
    font-size: 16px;
    line-height: 66px;
    text-align: center
}
</style>
