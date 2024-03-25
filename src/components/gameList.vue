
<template>
  <div class="list-gameList">
    <p>Список игр</p>
    <ul class = "elements">
    <li class = "element" v-for="game in gameList" :key="game.id">
      <router-link :to="{ name: 'game', params: { id: game.id }}">{{ game.titleRussian }}</router-link>
      {{ game.titleEnglish }}
    </li>
    </ul>
  </div>
</template>

<script>
import { GameApi } from '@/api/Game'
import './styles/GameList.css'

export default {
  name: 'gameList',
  data () {
    return {
      gameList: []
    }
  },
  async created () {
    await this.loadGameList()
  },
  methods: {
    async loadGameList () {
      try {
        const gameApi = new GameApi()
        this.gameList = await gameApi.getGameList()
      } catch (error) {
        console.error('Ошибка загрузки списка игр: ', error)
      }
    }
  }
}
</script>
