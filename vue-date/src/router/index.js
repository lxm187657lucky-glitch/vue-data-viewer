// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/', redirect: '/dataStat'
//   },
//   {
//     path: '/dataStat', component: () => import('@/components/UserLogin.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// // //挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to将要访问的路径
//   // from代表从哪个路径跳转而来
//   // next是一个函数表示放行
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (tokenStr) {
//     next()
//   } else {
//     // 用户未登录判断
//     if (to.path === '/dataStat' || to.path === '/guest/registerUser') {
//       next()
//     } else {
//       next({ path: '/dataStat' })
//     }
//   }
// })

// export default router
