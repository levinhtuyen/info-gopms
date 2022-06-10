import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
