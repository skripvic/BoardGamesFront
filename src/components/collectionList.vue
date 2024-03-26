<template>
  <div class="list-collectionList">
    <p>Ваши коллекции</p>
    <p>Тут стоит заглушка, пока только конкретный юзер</p>
    <ul class = "elements-collectionlist">
      <li class = "element-collectionlist" v-for="collection in collectionList" :key="collection.id">
          <router-link :to="{ name: 'collection', params: { id: collection.id }}">{{ collection.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { CollectionApi } from '@/api/Collection'
import './styles/CollectionList.css'

export default {
  name: 'collectionList',
  data () {
    return {
      collectionList: []
    }
  },
  async created () {
    await this.loadCollectionList()
  },
  methods: {
    async loadCollectionList () {
      try {
        // get curUserId
        const curUserId = '73ad6c78-cc3c-4c96-36df-08dc4c97c457'
        const collectionApi = new CollectionApi()
        this.collectionList = await collectionApi.getCollectionList(curUserId)
      } catch (error) {
        console.error('Ошибка загрузки списка коллекций: ', error)
      }
    }
  }
}
</script>
