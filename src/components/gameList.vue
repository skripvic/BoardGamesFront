
<template>
  <div class="GameList">
    <p>Список игр</p>
    <ul>
    <li v-for="game in gameList" :key="game.id">
      {{ game.alias }} {{ game.titleRussian }} {{ game.titleEnglish }}
    </li>
    </ul>
  </div>
</template>

<script>
import { GameApi } from '@/api/Game'

export default {
  name: 'GameList',
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
