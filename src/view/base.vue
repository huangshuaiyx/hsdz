<template>
  <div class="base">
    <div class="centent">
<router-view></router-view>
    </div>
    <div class="footer">
 <ul class="ul">
   <router-link :to='{"name":"shouye"}' tag="li"><van-icon name="wap-home-o" size="22"/>首页</router-link>
   <router-link :to='{"name":"xiaoxi"}' tag="li"><van-icon name="chat-o" size="22"/>消息</router-link>
   <router-link :to='{"name":"wyfaling"}' tag="li"><van-icon name="wap-home-o" size="22"/>我要发令</router-link>
   <router-link :to='{"name":"wenda"}' tag="li"><van-icon name="question-o" size="22"/>问答</router-link>
   <router-link :to='{"name":"wode"}' tag="li"><van-icon name="user-o" size="22"/>我的</router-link>
       
      </ul>
    </div>
    
  </div>
</template>

<style lang="">
  html,
  body,
  #app{
    width: 100%;
    height: 100%;
  }
  .base{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .centent{
    flex: 1;
    overflow: auto;

  }
   .ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    vertical-align: middle;
  }
  .ul>li{
    height: 2.666667rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    /* vertical-align: middle; */
  }
</style>