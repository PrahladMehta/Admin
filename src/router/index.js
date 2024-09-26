import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import AllProduct from '@/components/AllProduct.vue'
import Analytics from '@/components/Analytics.vue'
import Seller from '@/components/Seller.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:'/product',
      name:'product',
      component:AllProduct
  
    },{
      path:'/analytics',
      name:'analytics',
      component:Analytics
    },{
      path:'/sellers',
      name:'seller',
      component:Seller
    }
  ]
})   

export default router
