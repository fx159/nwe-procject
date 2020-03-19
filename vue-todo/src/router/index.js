import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { routerget } from '../utils/util'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'my-home'
    }
  },
  {
    path: '/about/:food',
    name: 'About',
    props: true, // 组件内动态传参
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    props: route => ({
      food: route.query.food // 组建函数传参
    })
  },
  {
    path: '/pane',
    name: 'pane',
    component: () => import('../components/Pane.vue')

  }
]

const router = new VueRouter({
  routes
})
const HAS_LOGIN = true
router.beforeEach((to, from, next) => {
  to.meta && routerget(to.meta.title)
  console.log('345')
  if (to.name !== '/login') {
    if (HAS_LOGIN) next()
    else next({ name: 'login' })
    // if (HAS_LOGIN) next('/')
  }
})// 全局路由导航守卫，负责页面权限控制和跳转

export default router
