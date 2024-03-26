import gameList from '@/components/gameList.vue'
import gameInfo from '@/components/gameInfo.vue'

export default {
  routes: [
    { path: '/game/list', component: gameList },
    { path: '/game/:id', name: 'game', component: gameInfo }
  ]
}
