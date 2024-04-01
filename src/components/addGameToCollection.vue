
<template>
  <div class="list-gameList">
    <p class = "list-gameList-title">Список игр</p>
    <ul class = "elements-gamelist">
    <li class = "element-gamelist" v-for="game in gameList" :key="game.id">
      <router-link class="element-gamelist-router-link" :to="{ name: 'game', params: { id: game.id }}">{{ game.titleRussian }}</router-link>
      <br/>
      {{ game.titleEnglish }}
      <input type="checkbox" v-model="game.selectedForAdding" class="checkbox-delete">
    </li>
    </ul>
  </div>
  <div class="button-center-create-game">
    <button class="button-create-game" @click=addGameToCollection>Завершить выбор</button>
  </div>
</template>

<script>
import { GameApi } from '@/api/Game'
import { CollectionApi } from '@/api/Collection'
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
        this.gameList = await gameApi.getGameList(localStorage.getItem('jwt'))
      } catch (error) {
        console.error('Ошибка загрузки списка игр: ', error)
      }
    },
    async addGameToCollection () {
      this.alert = ''
      const selectedGames = this.gameList.filter(game => game.selectedForAdding).map(game => game.id)
      const collectionApi = new CollectionApi()
      for (const game of selectedGames) {
        await collectionApi.addGameToCollection({
          collectionId: this.$route.params.id,
          gameId: game
        }, localStorage.getItem('jwt'))
      }
      this.$router.push('/collection/' + this.$route.params.id)
    }
  }
}
</script>
