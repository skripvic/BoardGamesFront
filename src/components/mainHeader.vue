<template>
  <header class="header">
      <router-link class="header__title" to="/home">Хроники настолок</router-link>
  </header>
</template>

<script>
import { GameApi } from '@/api/Game'
import './styles/Header.css'

export default {
  name: 'mainHeader',
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
