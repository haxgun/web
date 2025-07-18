import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/pages/CvPage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/pages/ProjectsPage.vue'),
    },
    {
      path: '/uses',
      name: 'uses',
      redirect: '/',
    },
    {
      path: '/open-source',
      name: 'open-source',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: { name: 'home' },
    },
  ],
})

export default router
