<template>
 <!-- 商品清单 -->
      <div class="shopping-List">
        <div class="shopping-content" >
          <a href="#" style="display: block;overflow:hidden"  v-for="item in list">
            <img :src="item.src" alt="">
            <div class="shopping-intro">
              <p>{{item.intro}}
              </p>
              <div class="shopping-price">
                <span class="shopping-price-now">￥<em>{{item.shoppingPriceNow}}</em></span>
                <span class="shopping-number">{{item.shoppingNumber}}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
  export default {
    name:"shoppingList",
    data(){
        return {
            list:[ 
                // {
                // src: require('../../../public/img/f4f14322c58f772cf2cdec184b39fad1.png'),
                // intro:"K-Touch/天语刘海屏X21全网通4G6.3英寸移动智能指纹千元学生手机",
                // shoppingPriceNow:"1989",
                // shoppingNumber:"以拼3.7万件"
                // },
                // {
                // src: require('../../../public/img/c5712789ddcb9c920558128c581ef9f0.png'),
                // intro:"衣柜组合套装床上用品布袋熊棕熊",
                // shoppingPriceNow:"998",
                // shoppingNumber:"以拼2012件"
                // },
                // {
                // src: require('../../../public/img/3c86808449f99d76233af408d340677b.png'),
                // intro:"凉席冰丝席两/三件套床裙可拆卸1.8米夏季空调席单人120cm折叠席",
                // shoppingPriceNow:"3998",
                // shoppingNumber:"以拼363件"
                // },
                // {
                // src: require('../../../public/img/e270411725bbc3b73ae66097009f5154.png'),
                // intro:"防晒衣女2019夏季防紫外线骑车宽松连帽防晒沙滩服空调衫长袖外套",
                // shoppingPriceNow:"98",
                // shoppingNumber:"以拼2033件"
                // },{
                // src: require('../../../public/img/f4f14322c58f772cf2cdec184b39fad1.png'),
                // intro:"K-Touch/天语刘海屏X21全网通4G6.3英寸移动智能指纹千元学生手机",
                // shoppingPriceNow:"1989",
                // shoppingNumber:"以拼3.7万件"
                // },
                // {
                // src: require('../../../public/img/c5712789ddcb9c920558128c581ef9f0.png'),
                // intro:"衣柜组合套装床上用品布袋熊棕熊",
                // shoppingPriceNow:"998",
                // shoppingNumber:"以拼2012件"
                // },
                // {
                // src: require('../../../public/img/3c86808449f99d76233af408d340677b.png'),
                // intro:"凉席冰丝席两/三件套床裙可拆卸1.8米夏季空调席单人120cm折叠席",
                // shoppingPriceNow:"3998",
                // shoppingNumber:"以拼363件"
                // },
                // {
                // src: require('../../../public/img/e270411725bbc3b73ae66097009f5154.png'),
                // intro:"防晒衣女2019夏季防紫外线骑车宽松连帽防晒沙滩服空调衫长袖外套",
                // shoppingPriceNow:"98",
                // shoppingNumber:"以拼2033件"
                // }
            ],

      }
    } ,
     mounted(){
       axios.get("http://localhost:3000/api/data").then((res)=>{
            var msg = res.data.msg;
            if(msg==="ok"){
                this. list= res.data.data.list;
            }
        });
    }

}

</script>

<style scoped>
/* 商品清单 */
.shopping-List .shopping-content{
    position: relative;
    margin: .08rem .06rem;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    
}
.shopping-List .shopping-content a img{
    width: 1.56rem;
    height: 1.56rem;
    margin: .06rem;
    border-radius: 2px;
    background-color: #fafafa;
    float: left;
}
/* 文字部分 */
.shopping-List .shopping-content
 a .shopping-intro{
    float: right;
    width: 1.91rem;
    height: 100%;
    position: relative;
 }
.shopping-List .shopping-content
 a .shopping-intro p{
    margin-top: .1rem;
    line-height: .2rem;
    font-size: .14rem;
    color: #151516;
    max-height: .4rem;
    width: 1.78rem;
    margin-bottom: .05rem;
    overflow: hidden;
    position: absolute;
    left: 0;
 } 
 .shopping-List .shopping-content
 a .shopping-intro .shopping-price{
    position: absolute;
    left: 0;
    top: .3rem;
 }
 .shopping-List .shopping-content
 a .shopping-intro .shopping-price .shopping-price-now{
    color: #e02e24;
    font-size: .18rem;
    font-weight: 700;
    line-height: 1;
 }
 .shopping-List .shopping-content
 a .shopping-intro .shopping-price .shopping-number{
    font-weight: 400;
    content: attr(data-sales);
    color: #58595b;
    font-size: .13rem;
    margin-left: .04rem;

 }
</style>
