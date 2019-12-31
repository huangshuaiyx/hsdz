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
//三级
import lbtiao from '@/sanji/lbtiao.vue'
import jggtiao from '@/sanji/jggtiao.vue'
import jptiao from '@/sanji/jptiao.vue'
import tabtiao from '@/sanji/tabtiao.vue'
import syzxtiao from '@/sanji/syzxtiao.vue'
import zxsjtiao from '@/sanji/zxsjtiao.vue'
import sjxztiao from '@/sanji/sjxztiao.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sjxztiao',
      name: 'sjxztiao',
      component: sjxztiao
    },
    {
      path: '/zxsjtiao',
      name: 'zxsjtiao',
      component: zxsjtiao
    },
    {
      path: '/syzxtiao',
      name: 'syzxtiao',
      component: syzxtiao
    },
    {
      path: '/tabtiao',
      name: 'tabtiao',
      component: tabtiao
    },
    {
      path: '/jptiao',
      name: 'jptiao',
      component: jptiao
    },
    {
      path: '/jggtiao',
      name: 'jggtiao',
      component: jggtiao
    },
    {
      path: '/lbtiao',
      name: 'lbtiao',
      component: lbtiao
    },
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
      redirect:"/base"
    }
  ]
})
