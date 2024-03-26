<template>
  <div class="list-gameList">
  <p>{{ gameInfo.titleRussian }} ({{ gameInfo.year }} год)</p>
  <p>{{ gameInfo.titleEnglish }}</p>
  <p>Возраст: {{ gameInfo.ageMin }}+</p>
  <p>{{ gameInfo.playersMin }} - {{ gameInfo.playersMax }} игроков</p>
  <p>Время игры: {{ gameInfo.playTimeMin }} - {{ gameInfo.playTimeMax }} минут</p>
  <p></p>
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
        this.gameInfo = await gameApi.getGameInfo(this.$route.params.id)
      } catch (error) {
        console.error('Ошибка загрузки игры: ', error)
      }
    }
  }
}
</script>
