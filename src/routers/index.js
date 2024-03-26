import { createRouter, createWebHistory } from 'vue-router'

import authRoutes from './auth.routes.js'
import gameRoutes from './game.routes.js'
import mainRoutes from './main.routes.js'
import collectionRoutes from './collection.routes.js'

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    ...mainRoutes.routes,
    ...authRoutes.routes,
    ...gameRoutes.routes,
    ...collectionRoutes.routes,
    { path: '/:pathMatch(.*)*', redirect: '/home' }
  ]
})
