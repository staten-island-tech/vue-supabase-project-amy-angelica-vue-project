import { storeSession } from '@/stores/session'
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
  
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: () => import('../views/LoginView.vue'), },
  
]})
/* 
router.beforeEach((to,from,next)=> {
  const userSession = storeSession()

  if (to.meta.needsAuth){
    if (userSession.session){
      return next()
    }
    else {
      return next ('/')
    }
  }
  return next()
}) */
export default router
