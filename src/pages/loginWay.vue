<template>
    <div class="login-input">
       <div class="login-group">
           <input type="text" class="phone" placeholder="手机号码">
       </div>
       <div class="login-group codeSpan" >
           <input type="text" class="code" placeholder="验证码">
           <span>发送验证码</span>
       </div>
       <div class="agree">
           <span class="agreeBtn">同意协议并注册</span>
           <router-link class="backBtn" :to="path">
               <span>返回</span>
           </router-link>
       </div>
    </div>
</template>

<script>

    export default {
    name:'loginWay',
    data(){
        return{
            path:"/homepage"
        }
        
    }

}

</script>

<style scoped>
.login-input{
    padding-top: 30px
}
.login-input .phone{
    background: url(../../public/img/iconfont.png) no-repeat 5px 10px;
    border-bottom: 0;
}
.login-input .code{
    background: url(../../public/img/code.png) no-repeat 5px 10px;
    border-top: 0;
}
.login-input input{
    width: 100%;
    height: 46.88px;
    border: 0;
    border-top: 1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    display: block;
    padding-left:.4rem;
    opacity: .8
}
.codeSpan{
    position: relative;
}
.codeSpan span{
    font-size: 12px;
    color: #fff;
    line-height: 30px;
    color:red;
    display: block;
    border: 1px solid red;
    width:80px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    border-radius: 3px;
    position: absolute;
    right: 18px;
    top:9px;
}
.agree span{
    display: block;
    width: 93%;
    height: .46875rem;
    background: #fff;
    border: 1px solid #de3025;
    color: #999999;
    font-size: .15rem;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    text-align: center;
    line-height:.46875rem;
}
.agree .agreeBtn{
    color: #999999;
    background: red;
}
.agree .backBtn span{
    color: #999999;
}
</style>
