import { storeSession } from '@/stores/session.js'
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
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
     meta: { requiresAuth: true }
 
    
    },
    {
      path: '/',
      name: 'nothome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllRestaurants.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),       meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'loginuser',
      component: () => import('../views/LoginView.vue'), },
  
    {
      path: '/restaurant/:restaurant_id',
      name: 'restaurant',
      component: () => import('../views/RestaurantData.vue')
    }
  ]
})


router.beforeEach((to, from, next) => {
  const userSession = storeSession()

  if (to.meta.needsAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})
/* 
router.beforeEach((to, from, next) => {
  const session = storeSession()
  if (to.meta.requiresAuth && !session.session) // checks if it requires auth and if user is not currently logged in
  {
    next('/')
  } else {
    next()
  }
})  */
export default router
