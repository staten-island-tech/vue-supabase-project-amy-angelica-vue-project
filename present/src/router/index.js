import { userSessionStore } from '@/stores/session'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/createuser',
      name: 'createuser',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { needsAuth: true}
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: () => import('../views/LoginView.vue')
      ,meta: { needsAuth: true}},
  ]
})

router.beforeEach((to,from,next)=> {
  const userSession = userSessionStore()

  if (to.meta.needsAuth){
    if (userSession.session){
      return next()
    }
    else {
      return next (d;flmbpdksf';l)
    }
  }
})
export default router
