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
      component: () => import('../views/HomeView.vue')
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
    },
  ]
 /*  const router = createRouter({ history:createWebHistory('https://uzufnrmrvcxbarxfvhks.supabase.co'),
routes}) */
})
router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some
  (record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('sign-in');
  else if(!requiresAuth && currentUser) next("/");
  else next();
})
export default router