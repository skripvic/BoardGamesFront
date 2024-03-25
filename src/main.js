import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'



const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/game/list', component: gameList },
    { path: '/game/:id', name: 'game', component: gameInfo },
    { path: '/home', component: mainPage },
    { path: '/auth/register', component: registrationForm },
    { path: '/auth/signin', component: signInForm }
  ]
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
// { path: '/games/createGame', component: createGame },
// { path: '/auth/signIn', component: signInForm }
