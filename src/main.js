import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import registrationForm from './components/registrationForm.vue'
import gameList from './components/gameList.vue'

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/games', component: gameList },
    // { path: '/games/createGame', component: createGame },
    { path: '/auth/register', component: registrationForm }
    // { path: '/auth/signIn', component: signInForm }
  ]
})

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
