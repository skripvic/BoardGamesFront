<template>
  <div class="list-collectionList">
    <p class="main-text-collection">Ваши коллекции</p>
    <ul class = "elements-collectionlist" v-if="collectionList.length > 0">
      <li class = "element-collectionlist" v-for="collection in collectionList" :key="collection.id">
          <router-link class="element-collectionlist-router-link" :to="{ name: 'collection', params: { id: collection.id }}">{{ collection.name }}</router-link>
      </li>
    </ul>
    <p class="text-extra" v-else>У вас нет ни одной коллекции!</p>
  </div>
  <div class="button-center-collection">
    <button class="button-collection-create" @click="$router.push('/collection/add')">Добавить коллекцию</button>
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
        const collectionApi = new CollectionApi()
        this.collectionList = await collectionApi.getCollectionList(localStorage.getItem('jwt'))
      } catch (error) {
        console.error('Ошибка загрузки списка коллекций: ', error)
      }
    }
  }
}
</script>
