import {createRouter, createWebHistory} from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('./pages/HomePage.vue')
    },
    {
      path: '/scroll-1',
      name: 'ScrollExampleOne',
      component: () => import('./pages/ScrollExampleOne.vue')
    },
    {
      path: '/hexagon-example',
      name: 'HexagonExample',
      component: () => import('./pages/HexagonPage.vue')
    }
  ]
})