// const auth = () => {
//   if (!localStorage.getItem('token')) {
//     // 未登陆,重定向到登录页面
//     return '/login'
//   }
// }

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/pages/home.vue'),
    redirect: '/home/user', //新增
    children: [
      {
        path: '/home/user',
        component: () => import('@/pages/user.vue')
      },
      {
        path: '/home/manage',
        component: () => import('@/pages/manage.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/notFound.vue')
  }
]

export default routes
