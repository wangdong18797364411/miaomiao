<template>
    <div class="login-box">
        <p>选择登录方式</p>
        <router-link class="btn" :to="path">
            <img src="../../public/img/loginBtn.png" alt="">
        </router-link>
        <LoginBottom></LoginBottom>
    </div>
</template>

<script>

    import LoginBottom from '../components/login/loginBottom.vue'
    export default {
    name:'login',
    components:{
        LoginBottom,
    },
    data(){
        return {
            path:"/loginWay"
        } 
    }

}

</script>

<style scoped>
.login-box{
    margin-top:1rem;
}
.login-box p{
    text-align: center;
    color: #151516;
    letter-spacing: 0;
    margin-bottom: .41rem;
    font-size: .19rem;
}
.login-box .btn img{
    margin:  0 auto;
}
</style>
