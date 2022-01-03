import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { auth: true },
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../dashboard/Wellcome.vue'),
      },
      {
        path: '/list',
        component: () => import('../dashboard/List.vue'),
      },
      {
        path: '/admin',
        component: () => import('../dashboard/admin/Admin.vue'),
      },
      {
        path: '/car/:carid',
        component: () => import('../dashboard/Car.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (sessionStorage.getItem('DATA')) next();
    else next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
