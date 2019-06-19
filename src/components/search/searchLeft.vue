<template>
    <div class="tabListLeft">
        <ul>
            <li v-for="item in list">{{item.kind}}</li>
        </ul>
    </div>
</template> 

<script>
    export default {
    name:"searchInput",
    data(){
        return{
            list:[
                {
                 kind:"女装"   
                },
                {
                 kind:"包装"   
                },
                {
                 kind:"男装"   
                },
                {
                 kind:"内衣"   
                },
                {
                 kind:"母婴"   
                },
                {
                 kind:"床上用品"   
                },
                {
                 kind:"女装"   
                },
                {
                 kind:"女装"   
                },
                {
                 kind:"包装"   
                },
                {
                 kind:"男装"   
                },
                {
                 kind:"女装"   
                },
                {
                 kind:"包装"   
                },
                {
                 kind:"男装"   
                },
                {
                 kind:"内衣"   
                },
                {
                 kind:"母婴"   
                },
                {
                 kind:"床上用品"   
                },
                {
                 kind:"女装"   
                },
                {
                 kind:"内衣"   
                },
                {
                 kind:"母婴"   
                },
                {
                 kind:"床上用品"   
                },
                {
                 kind:"女装"   
                },
                {
                 kind:"鞋"   
                },
                {
                 kind:"服饰"   
                },
                {
                 kind:"家电"   
                },
                {
                 kind:"鞋"   
                },
                {
                 kind:"家纺"   
                },
                {
                 kind:"最后一个"   
                },
            ]
        }
    }
}
</script>

<style scoped>
/* 左边 */
.tabListLeft{
    background: #f2f2f2;
    box-sizing: border-box;
    display: flex;
    overflow-y: auto;
}
.tabListLeft li{
    width: 89px;
    height: .52rem;
    font-size: .15rem;
    text-align: center;
    line-height: .52rem;
}
/* 右边 */
.tabListRight{
    width: 2.86rem;
}
</style>
