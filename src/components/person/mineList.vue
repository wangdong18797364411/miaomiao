
<template>
    <div class="mineList" >
       <a href="" v-for="(item,index) in list">
           <i class="iconfont" v-html="item.icon"></i>
           <span>{{item.name}}</span>
       </a>
       <div class="choose">精选</div>
        <div style="clear:both"></div>
    </div>
</template>

<script>

    export default {
    name:'mineList',
    data(){
        return {
            list:[
                {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                },
                 {
                    icon:"&#xe507;",
                    name:"代付款"
                }
            ]
        }
    }

}

</script>

<style scoped>
.mineList{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.mineList a{
    width: 20%;
    text-align: center;
    margin: 15px auto;
}
.mineList a i{
    display: block;
}
.mineList span{
    display: block;
    margin: 10px auto;
}
.mineList span{
    font-size: 14px;
    color: #333;
    display: block
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
