<template>
<!-- 无花果 -->
      <div class="content">
         <div class="newList"> 
          <div class="shoppingList" > 
            <a href="#">
              <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
              <span class="name">夏威夷果</span>
              <div class="bottom">
                <span class="tubiao">新人价</span>
                <span class="tu_price">￥<em>7.9</em></span>
              </div>
            </a>
          </div>
          <div class="shoppingList" > 
              <a href="#">
                <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
                <span class="name">夏威夷果</span>
                <div class="bottom">
                  <span class="tubiao">新人价</span>
                  <span class="tu_price">￥<em>7.9</em></span>
                </div>
              </a>
          </div>   
          <div class="shoppingList" > 
              <a href="#">
                <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
                <span class="name">夏威夷果</span>
                <div class="bottom">
                  <span class="tubiao">新人价</span>
                  <span class="tu_price">￥<em>7.9</em></span>
                </div>
              </a>
          </div>   
        </div>
        <div class="newList"> 
            <div class="shoppingList" > 
              <a href="#">
                <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
                <span class="name">夏威夷果</span>
                <div class="bottom">
                  <span class="tubiao">新人价</span>
                  <span class="tu_price">￥<em>7.9</em></span>
                </div>
              </a>
            </div>
            <div class="shoppingList" > 
                <a href="#">
                  <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
                  <span class="name">夏威夷果</span>
                  <div class="bottom">
                    <span class="tubiao">新人价</span>
                    <span class="tu_price">￥<em>7.9</em></span>
                  </div>
                </a>
            </div>   
            <div class="shoppingList" > 
                <a href="#">
                  <img src="img/23baeb9b-f3d8-467e-bc34-e656f3f38220.png" alt="" style="width: 111px">
                  <span class="name">夏威夷果</span>
                  <div class="bottom">
                    <span class="tubiao">新人价</span>
                    <span class="tu_price">￥<em>7.9</em></span>
                  </div>
                </a>
            </div>   
          </div>
      </div>
</template>

<script>

  export default {
    name:"X-scroll",
   
}

</script>

<style scoped>
/* 无花果 */
.newList{
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.newList .shoppingList{
    text-align: center;
    width: 33%;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.newList .shoppingList a{
    font-size: 14px;
    line-height: 14px;
    display: block;
}
.newList .shoppingList .name{
    color: #666666;
}
.newList .shoppingList  .bottom{
    margin-top: 6px;
}
.newList .shoppingList  .tubiao{
    background: red;
    color: #fff;
    border-radius: 3px;
    padding-left: 2px;
}
.newList .shoppingList  .tu_price{
    color: red;
}
</style>
