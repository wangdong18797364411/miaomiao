<template>
  <div class="new">
  <div class="new-special-passage">
        <div>
          <a href="#">
            <span>新人专享</span>
            <span></span>
            <span>券</span>
            <span>爆款热卖&nbsp;包邮到家</span>
          </a>
        </div>
        <div><span>查看更多</span></div>
    </div>
    </div>
</template>

<script>

  export default {
    name:"newTit",
   
}

</script>

<style scoped>
/* new */
.new{
    width: 100%;
    margin-top: .05rem;
}
.new .new-special-passage{
    padding: 0 .12rem; 
    display:flex;
    justify-content: space-around;
    align-items: center;

}
.new .new-special-passage a{
   display:flex;
    justify-content: space-around;
    align-items: center;
}
.new .new-special-passage a span:nth-child(1){
    color: #151516;
    font-size: .16rem;
    padding-left: .04rem;
    font-weight: 700;
    display: block;
}
.new .new-special-passage a span:nth-child(2){
    width: .01rem;
    height: .14rem;
    font-size: .14rem;
    margin: 0 .08rem;
    background: #9c9c9c;
    display:block;
}
.new .new-special-passage a span:nth-child(3){
    position: relative;
    width: .22rem;
    height: .16rem;
    font-size: .12rem;
    color: #fff;
    line-height: normal;
    text-align: center;
    border-radius: .02rem;
    background: #f32109;
    line-height: .17rem;
    display: block;
}
.new .new-special-passage a span:nth-child(4){
    color: #9c9c9c;
    font-size: .14rem;
    display: inline-block;
    margin-left: .06rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}
.new .new-special-passage span{
    color: #9c9c9c;
    font-size: .14rem;
    float: right;
    padding-right: .13rem;
}
</style>
