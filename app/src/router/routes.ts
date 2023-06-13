import { RouteRecordRaw } from 'vue-router';

import authRoute from './authRoute';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/auth/login' },
  authRoute,
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
    ],
  },
];

export default routes;
