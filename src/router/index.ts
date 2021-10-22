import Details from '@/views/Details.vue';
import Search from '@/views/Search.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/details/:type/:value',
    name: 'Details',
    component: Details,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
