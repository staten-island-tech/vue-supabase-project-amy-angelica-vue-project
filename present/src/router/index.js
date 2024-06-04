import { storeSession } from '@/stores/session.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create',
      name: 'create',
      component: () => import('../components/TheAuth.vue')
    },
    {
      path: '/nothome',
      name: 'nothome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AllRestaurants.vue'), meta: { requiresAuth: true }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../components/Account.vue')
    },
    {
      path: '/',
      name: 'loginuser',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/restaurant/:restaurant_id',
      name: 'restaurant',
      component: () => import('../views/RestaurantData.vue'), meta: { requiresAuth: true }
    },
    {
      path: '/verifyemail',
      name: 'verifyemail',
      component: () => import('../views/VerifyView.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userSession = storeSession()

  if (to.meta.requiresAuth) {
    if (userSession.session) {
      return next()
    } else {
      return next('/')
    }
  }

  return next()
})

export default router