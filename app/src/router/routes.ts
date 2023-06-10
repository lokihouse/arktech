import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/WrapperLayout.vue'),
    children: [{ path: '', component: () => import('pages/Auth/LoginPage.vue') }],
  },
];

export default routes;
