<template>
    <div class="tabRightShoppingList">
        <ul>
            <li v-for="item in list">
                <img :src="item.src" alt="">
                <span class="goodsName">{{item.listName}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
    name:"tabRightShoppingList",
     data(){
        return {
            list:[
                {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
               {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
                {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
               {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
                {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
               {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
                {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
               {
                    src:require("../../../public/img/609654d3-a751-4001-8ec2-6732a73195d5.png"),
                    listName:"长裤"
                },
                {
                    src:require("../../../public/img/3a1ac479-1b87-417f-9f33-3abde48258fc.png"),
                    listName:"长衣物"
                },
                {
                    src:require("../../../public/img/aa915856-7271-49f4-aff6-264bda717920.png"),
                    listName:"短袖"
                },
                {
                    src:require("../../../public/img/43193c76-241f-4215-87b3-ff77f5aa01e4.png"),
                    listName:"卫衣"
                },
                {
                    src:require("../../../public/img/40f38504-3d02-4587-a13e-f8cd5a5d5ebe.png"),
                    listName:"上衣外套"
                },
                {
                    src:require("../../../public/img/e0b6ec0448e7aef3ab66c7a50beeca79.png"),
                    listName:"夹克"
                },
            ]
        }
     }
}
</script>

<style scoped>
.tabRightShoppingList ul{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
}
.tabRightShoppingList ul li{
    width: 95px;
    text-align: center;
    padding-bottom: 10px;
}
.tabRightShoppingList ul li img{
    width: 56px;
    height: 56px;
    display: block;
    margin: 0 auto;
}
.tabRightShoppingList ul li span{
    display: block;
    text-align: center
}
.tabRightShoppingList ul li a{
    text-align: center;
    widows: 33%;
}
.tabRightShoppingList .goodsName{
    font-size: 12px;
}
</style>
