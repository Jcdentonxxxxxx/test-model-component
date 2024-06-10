import Home  from '@/pages/Home.vue';
import TheWelcome  from '@/components/TheWelcome.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/welcome', component: TheWelcome
  }
]

const router = createRouter({
  
  history: createWebHistory(),
  routes, 
})

export default router;

