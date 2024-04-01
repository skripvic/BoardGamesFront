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
        <p class="text-extra" v-else>В вашей коллекции нет ни одной игры!</p>
    </div>
    <div class="button-center-create-game" v-if="!deletingMode">
      <button class="button-create-game" @click="this.$router.push('/collection/addGame/' + this.$route.params.id)"> Добавить игру </button>
    </div>
    <div class="button-center-create-game" v-if="gameList.length > 0">
      <button class="button-create-game" @click="toggleDeletingMode">{{ deletingMode ? 'Завершить удаление' : 'Удалить игры' }}</button>
    </div>
    <div class="button-center-create-game" v-if="!deletingMode">
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
      deletingMode: false,
      alert: ''
    }
  },
  async created () {
    await this.loadCollectionInfo()
  },
  methods: {
    async loadCollectionInfo () {
      try {
        const collectionApi = new CollectionApi()
        this.collectionInfo = await collectionApi.getCollectionInfo(this.$route.params.id, localStorage.getItem('jwt'))
        this.gameList = await collectionApi.getGamesInCollectionList(this.$route.params.id, localStorage.getItem('jwt'))
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
      const collectionApi = new CollectionApi()
      for (const game of selectedGames) {
        await collectionApi.deleteGameFromCollection({
          collectionId: this.$route.params.id,
          gameId: game
        }, localStorage.getItem('jwt'))
      }
      this.loadCollectionInfo()
    },
    async deleteCollection () {
      this.alert = ''
      const collectionApi = new CollectionApi()
      await collectionApi.deleteCollection({
        id: this.$route.params.id
      }, localStorage.getItem('jwt')).catch((error) => {
        this.alert = error.message
      })
      if (this.alert === '') {
        this.$router.push('/collection/list')
      }
    }
  }
}
</script>
