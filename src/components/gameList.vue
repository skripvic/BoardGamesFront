
<template>
  <div class="list-gameList">
    <p class = "list-gameList-title">Список игр</p>
    <ul class = "elements-gamelist">
    <li class = "element-gamelist" v-for="game in gameList" :key="game.id">
      <router-link class="element-gamelist-router-link" :to="{ name: 'game', params: { id: game.id }}">{{ game.titleRussian }}</router-link>
      <br/>
      {{ game.titleEnglish }}
    </li>
    </ul>
  </div>
  <div id="alert" class="text-alert" v-if="alert">{{ alert }}</div>
  <div class="button-center-create-game">
    <button class="button-create-game" @click="$router.push('/game/add')">Добавить игру</button>
  </div>
</template>

<script>
import { GameApi } from '@/api/Game'
import './styles/GameList.css'

export default {
  name: 'gameList',
  data () {
    return {
      gameList: [],
      alert: ''
    }
  },
  async created () {
    await this.loadGameList()
  },
  methods: {
    async loadGameList () {
      try {
        const gameApi = new GameApi()
        this.gameList = await gameApi.getGameList(localStorage.getItem('jwt'))
      } catch (error) {
        this.alert = error.message
      }
    }
  }
}
</script>
