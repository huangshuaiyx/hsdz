import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//主页
import base from '@/view/base.vue'
 //首页
import shouye from '@/components/shouye.vue'
import xiaoxi from '@/components/xiaoxi.vue'
import wyfaling from '@/components/wyFaling.vue'
import wenda from '@/components/wenDa.vue'
import wode from '@/components/woDe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'base',
      component: base,
      children:[
        {
          path: '/shouye',
          name: 'shouye',
          component: shouye
        },
        {
          path: '/xiaoxi',
          name: 'xiaoxi',
          component: xiaoxi
        },
        {
          path: '/wyfaling',
          name: 'wyfaling',
          component: wyfaling
        },
        {
          path: '/wenda',
          name: 'wenda',
          component: wenda
        },
        {
          path: '/wode',
          name: 'wode',
          component: wode
        }
      ]
      
    },
    {
      path:"/",
      redirect:"/base/shouye"
    }
  ]
})
