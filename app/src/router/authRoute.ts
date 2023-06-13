export default {
  path: '/auth',
  component: () => import('layouts/WrapperLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('pages/Auth/LoginPage.vue'),
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('pages/Auth/RegisterPage.vue'),
    },
    {
      path: 'verify_email',
      name: 'verify_email',
      component: () => import('pages/Auth/VerifyEmailPage.vue'),
    },
  ],
};
