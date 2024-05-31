import { storeSession } from '@/stores/session.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/createuser',
      name: 'createuser',
      component: () => import('../views/CreateView.vue'),
    
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
  
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/loginuser',
      name: 'loginuser',
      component: () => import('../views/LoginView.vue'), },
  
]})
router.beforeEach((to, from, next) => {
  const session = storeSession()
  if (to.meta.requiresAuth && !session.session) // checks if it requires auth and if user is not currently logged in
  {
    next('/loginuser')
  } else {
    next()
  }
})
export default router
