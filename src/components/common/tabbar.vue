<template>
 <footer>
    <ul class="footer-List">
      <router-link class="fonter-Content" v-for="(item,index) in tabbar"
         :to="item.path"
         tag="li">
          <i class="iconfont" v-html="item.icon" ></i>
          <p>{{item.title}}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>

  export default {
    name:"tabbar",
     data(){
        return {
            tabbar:[
                {
                   icon:"&#xe511;",
                   title:"首页" ,
                   path:"Homepage"
                },
                {
                   icon:"&#xe520;",
                   title:"推荐" ,
                   path:"/recommend"
                   
                },
                {
                   icon:"&#xe60d;",
                   title:"搜索",
                   path:"/search" 
                },
                {
                   icon:"&#xe501;",
                   title:"聊天" ,
                   path:"/chat"
                },
                {
                   icon:"&#xe60e;",
                   title:"个人中心" ,
                   path:"/person"
                }
            ],
        }
    },
}

</script>

<style scoped>
 /* footer */
footer{
     height: .49rem;
     width: 100%;
     background: #f2f2f2;
 }
 footer .footer-List{
    display:flex;
    justify-content: space-around;
    align-items: center; 
    border-top: 1px solid #d9d9d9
 }
 footer .footer-List .fonter-Content{
     text-align: center;
     flex: 1;
     color: #666666;
 }
 footer .footer-List .fonter-Content p{
    bottom: .05rem;
    font-size: .1rem;
    width: 100%;
    line-height: 1;
 }
 footer .footer-List .fonter-Content i{
     display: block;
     margin: 5px;
 } 
 .btnColor {
  color: red;
}
.footer-List li .active{
   color:red;
}
.footer-List li.router-link-active{
   color:red;
}
</style>
