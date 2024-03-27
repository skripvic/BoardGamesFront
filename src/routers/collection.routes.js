import collectionList from '@/components/collectionList.vue'
import collectionInfo from '@/components/collectionInfo.vue'
import collectionAdd from '@/components/collectionAdd.vue'

export default {
  routes: [
    { path: '/collection/list', component: collectionList },
    { path: '/collection/:id', name: 'collection', component: collectionInfo },
    { path: '/collection/add', component: collectionAdd }
  ]
}
