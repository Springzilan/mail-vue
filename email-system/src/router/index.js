import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Main',
    component: ()=>import('@/views/Main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
          title: '主页',
          requiresAuth: true //需要登录
        }
      },
      {
        path: '/user',
        name: 'user',
        component: ()=>import('@/views/user/')
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

// 路由拦截，判断是否需要登录
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    //判断是否有标题
    document.title = to.meta.title;
  }
  // console.log("title",document.title)
  // 通过requiresAuth判断当前路由导航是否需要登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem('token')
    // console.log("token",token)
    // 若需要登录访问，检查是否为登录状态
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router