import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { LocalStorage } from 'quasar';
import routes from './routes';

export default route((/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach(async (to, from, next) => {
    const auth = to.meta.requiresAuth;
    const isLoggedIn = LocalStorage.getItem('user_token')?.toString() ?? '';
    if (auth && !isLoggedIn) {
      next({ name: 'login' });
    } else {
      next();
    }
  });

  return Router;
});
