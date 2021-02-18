import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path:'',
        component: () => import(/* webpackChunkName: "hot" */ '../views/Hot')
      },
      {
        path:'/post',
        component: () => import(/* webpackChunkName: "post" */ '../views/Post')
      },
      {
        path:'/login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login')
      },
      {
        path:'/signup',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Signup')
      },
      {
        path:'/optout',
        component: () => import(/* webpackChunkName: "optout" */ '../views/Optout')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
