import gameList from '@/components/gameList.vue'
import gameInfo from '@/components/gameInfo.vue'
import gameCreate from '@/components/gameCreate.vue'

export default {
  routes: [
    { path: '/game/list', component: gameList },
    { path: '/game/:id', name: 'game', component: gameInfo },
    { path: '/game/add', component: gameCreate }
  ]
}
