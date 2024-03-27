<template>
    <div class="list-gameList">
        <p class="list-gameList-title">Коллекция {{ collectionInfo.name }}</p>
        <ul class = "elements-gamelist" v-if="gameList.length > 0">
            <li class = "element-gamelist" v-for="game in gameList" :key="game.id">
            <router-link class="element-gamelist-router-link" :to="{ name: 'game', params: { id: game.id }}">{{ game.titleRussian }}</router-link>
            <br/>
            {{ game.titleEnglish }}
            <input type="checkbox" v-model="game.selectedForDeletion" class="checkbox-delete" v-if="deletingMode">
            </li>
        </ul>
        <p v-else>В вашей коллекции нет ни одной игры!</p>
    </div>
    <div class="button-center-create-game">
      <button class="button-create-game" @click="toggleDeletingMode">{{ deletingMode ? 'Завершить удаление' : 'Удалить игры' }}</button>
    </div>
    <div class="button-center-create-game">
      <button class="button-create-game" @click="deleteCollection">Удалить коллекцию</button>
    </div>
</template>

<script>
import { CollectionApi } from '@/api/Collection'
import './styles/GameList.css'

export default {
  name: 'collectionInfo',
  data () {
    return {
      collectionInfo: '',
      gameList: [],
      deletingMode: false
    }
  },
  async created () {
    await this.loadCollectionInfo()
  },
  methods: {
    async loadCollectionInfo () {
      try {
        const collectionApi = new CollectionApi()
        this.collectionInfo = await collectionApi.getCollectionInfo(this.$route.params.id)
        this.gameList = await collectionApi.getGamesInCollectionList(this.$route.params.id)
      } catch (error) {
        console.error('Ошибка загрузки игры: ', error)
      }
    },
    toggleDeletingMode () {
      if (!this.deletingMode) {
        this.deletingMode = true
      } else {
        this.deleteGames()
        this.deletingMode = false
      }
    },
    async deleteGames () {
      const selectedGames = this.gameList.filter(game => game.selectedForDeletion).map(game => game.id)
      console.log('Выбранные игры для удаления:', selectedGames)
      const collectionApi = new CollectionApi()
      for (const game of selectedGames) {
        console.log('Удаляем:', game)
        await collectionApi.deleteGameFromCollection({
          collectionId: this.$route.params.id,
          gameId: game
        })
      }
    },
    async deleteCollection () {
      const collectionApi = new CollectionApi()
      await collectionApi.deleteCollection({
        collectionId: this.$route.params.id
      })
    }
  }
}
</script>
