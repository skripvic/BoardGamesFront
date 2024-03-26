<template>
    <div class="list-gameList">
        <p>Коллекция {{ collectionInfo.name }}</p>
        <ul class = "elements-gamelist" v-if="gameList.length > 0">
            <li class = "element-gamelist" v-for="game in gameList" :key="game.id">
            <router-link :to="{ name: 'game', params: { id: game.id }}">{{ game.titleRussian }}</router-link>
           {{ game.titleEnglish }}
            </li>
        </ul>
        <p v-else>В вашей коллекции нет ни одной игры!</p>
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
      gameList: []
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
    }
  }
}
</script>
