<template>
  <div class="text_game-info">
  <p class="list-gameList-title">Информация об игре</p>
  <p>{{ gameInfo.titleRussian }} ({{ gameInfo.year }} год)</p>
  <p>{{ gameInfo.titleEnglish }}</p>
  <p>Возраст: {{ gameInfo.ageMin }}+</p>
  <p v-if="gameInfo.playersMin == gameInfo.playersMax && gameInfo.playersMax == 1"> {{ gameInfo.playersMax }} игрок </p>
  <p v-else-if="gameInfo.playersMin == gameInfo.playersMax && gameInfo.playersMax < 5"> {{ gameInfo.playersMax }} игрока </p>
  <p v-else-if="gameInfo.playersMin == gameInfo.playersMax"> {{ gameInfo.playersMax }} игроков </p>
  <p v-else>{{ gameInfo.playersMin }} - {{ gameInfo.playersMax }} игроков</p>
  <p>Время игры: {{ gameInfo.playTimeMin }} - {{ gameInfo.playTimeMax }} минут</p>
  </div>
</template>

<script>
import { GameApi } from '@/api/Game'
import './styles/GameList.css'

export default {
  name: 'gameInfo',
  data () {
    return {
      gameInfo: ''
    }
  },
  async created () {
    await this.loadGameInfo()
  },
  methods: {
    async loadGameInfo () {
      try {
        const gameApi = new GameApi()
        this.gameInfo = await gameApi.getGameInfo(this.$route.params.id, localStorage.getItem('jwt'))
      } catch (error) {
        this.alert = error.message
      }
    }
  }
}
</script>
