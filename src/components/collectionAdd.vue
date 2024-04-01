<template>
    <div class="form_collection-wrapper " id="reg">
      <div id="alert" v-if="alert">{{ alert }}</div>
      <p class="main-text-collection">Создание коллекцию</p>
      <form @submit.prevent="addCollection">
        <div class="form_collection-text">
          Название коллекции
          <input class="form_collection-input" type="name" v-model="name" />
        </div>
        <div class="button-center-collection">
          <button class="button-collection-create" type="submit">Создать</button>
        </div>
      </form>
    </div>
</template>

<script>
import { CollectionApi } from '@/api/Collection'
import './styles/CollectionCreate.css'

export default {
  data () {
    return {
      name: '',
      alert: ''
    }
  },
  methods: {
    async addCollection () {
      this.alert = ''
      const userId = '73ad6c78-cc3c-4c96-36df-08dc4c97c457'
      const collectionApi = new CollectionApi()
      const collection = await collectionApi.createCollection({
        name: this.name,
        userId: userId
      }, localStorage.getItem('jwt')
      ).catch((error) => {
        this.alert = error.message
      })
      if (this.alert === '') {
        this.$router.push('/collection/' + collection.id)
      }
    }
  }
}
</script>
