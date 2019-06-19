<template>
    <div class="shoppingContent">
        <div style="clear:both"></div>
        <div class="shoppingList">
           <a v-for="item in list">
                <img :src="item.src" alt="">
                <span class="listName">{{item.listName}}</span>
                <span class="goodMsg">{{item.goodMsg}}</span>
                <span class="goodPrice">{{item.goodPrice}}</span>
            </a>
        </div>
        <div class="OB-clear"></div>
    </div>
</template>

<script>

    export default {
    name:'recommendList',
    data(){
        return {
              list:[
                  {
                    src:require("../../../public/img/5ed05d0b06d35982cbb3b30bc7391aa5.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/3c86808449f99d76233af408d340677b.png"),
                    listName:"衣柜组合套装床上用品布袋熊棕熊",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/e270411725bbc3b73ae66097009f5154.png"),
                    listName:"防晒衣女2019夏季防紫外线骑车宽松连帽防晒沙滩服空调衫长袖外套",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/f4f14322c58f772cf2cdec184b39fad1.png"),
                    listName:"天语刘海屏X21全网通4G6.3英寸移动智能指纹千元学生手机",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                 {
                    src:require("../../../public/img/f4f14322c58f772cf2cdec184b39fad1.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/5ed05d0b06d35982cbb3b30bc7391aa5.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/3c86808449f99d76233af408d340677b.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/e270411725bbc3b73ae66097009f5154.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                {
                    src:require("../../../public/img/5ed05d0b06d35982cbb3b30bc7391aa5.png"),
                    listName:"天语刘海屏X21全网通4G6.3英寸移动智能指纹千元学生手机",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
                 {
                    src:require("../../../public/img/f4f14322c58f772cf2cdec184b39fad1.png"),
                    listName:"乌龙茶烟大红袍凤凰水仙铁观音金俊眉龙井金线莲武夷岩茶细支款",
                    goodMsg:"满100送100",
                    goodPrice:"37￥"
                },
            ]
        }
    } 
}

</script>

<style scoped>
.shoppingContent .shoppingList{
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    align-items: center
}
.shoppingContent .shoppingList a{
    text-align: center;
    display: block;
    width: 50%;
    padding-bottom: 10px;
}
.shoppingContent .shoppingList a img{
    width: 186px;
    height: 186px;
    display: block;
    margin: 0 auto;
}
.shoppingContent .shoppingList a .listName{
    font-size: 15px;
    display: block;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    margin: 10px auto;
}
.shoppingContent .shoppingList a .goodMsg{
    color: red;
    font-size: 12px;
    display: block;
    float: right;
    margin-right: 5px;
}
.shoppingContent .shoppingList a .goodPrice{
    color: #df0057;
    font-size: 12px;
    display: block;
    float: left;
}
.OB-clear{
    clear: both;
}
</style>
