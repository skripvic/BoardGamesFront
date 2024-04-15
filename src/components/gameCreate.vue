<template>
    <div class="form_collection-wrapper " id="reg">
      <div id="alert" class="text-alert" v-if="alert">{{ alert }}</div>
      <p class="main-text-collection">Добавление игры</p>
      <form @submit.prevent="addCollection">
        <div class="form_collection-text">
          Алиас (уникальное имя)
          <input class="form_collection-input" v-model="alias" />
        </div>
        <div class="form_collection-text">
          Название на русском
          <input class="form_collection-input" v-model="titleRussian" />
        </div>
        <div class="form_collection-text">
          Название на английском
          <input class="form_collection-input" v-model="titleEnglish" />
        </div>
        <div class="form_collection-text">
          Минимальное количество игроков
          <input class="form_collection-input" v-model="playersMin" />
        </div>
        <div class="form_collection-text">
          Максимальное количество игроков
          <input class="form_collection-input" v-model="playersMax" />
        </div>
        <div class="form_collection-text">
          Минимальный возраст
          <input class="form_collection-input" v-model="ageMin" />
        </div>
        <div class="form_collection-text">
          Минимальное время игры
          <input class="form_collection-input" v-model="playTimeMin" />
        </div>
        <div class="form_collection-text">
          Максимальное время игры
          <input class="form_collection-input" v-model="playTimeMax" />
        </div>
        <div class="form_collection-text">
          Год выпуска
          <input class="form_collection-input" v-model="year" />
        </div>
        <div class="form_collection-text">
          Изображение (url)
          <input class="form_collection-input" v-model="photoUrl" />
        </div>
        <div class="button-center-collection">
          <button class="button-collection-create" type="submit">Добавить</button>
        </div>
      </form>
    </div>
</template>

<script>
import { GameApi } from '@/api/Game'
import './styles/CollectionCreate.css'

export default {
  data () {
    return {
      alias: '',
      titleRussian: '',
      titleEnglish: '',
      playersMin: '',
      playersMax: '',
      ageMin: '',
      playTimeMin: '',
      playTimeMax: '',
      year: '',
      photoUrl: '',
      alert: ''
    }
  },
  methods: {
    async addCollection () {
      this.alert = ''
      const gameApi = new GameApi()
      const game = await gameApi.createGame({
        alias: this.alias,
        titleRussian: this.titleRussian,
        titleEnglish: this.titleEnglish,
        photoUrl: this.photoUrl,
        playersMin: this.playersMin,
        playersMax: this.playersMax,
        ageMin: this.ageMin,
        playTimeMin: this.playTimeMin,
        playTimeMax: this.playTimeMax,
        year: this.year
      }, localStorage.getItem('jwt')
      ).catch((error) => {
        const msg = error.message
        const start = msg.substring(0, msg.indexOf('.'))
        this.alert = msg.substring(msg.indexOf(':') + 2, msg.indexOf('at ' + start))
      })
      if (this.alert === '') {
        this.$router.push('/game/' + game.id)
      }
    }
  }
}
</script>
