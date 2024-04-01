<template>
  <div class="list-userList">
    <p class = "list-userList-title">Список пользователей</p>
    <ul class = "elements-userList">
    <li class = "element-userList" v-for="user in userList" :key="user.id">
      {{ user.name }}
    </li>
    </ul>
  </div>
</template>

<script>
import { UserApi } from '@/api/User'
import './styles/User.css'

export default {
  name: 'userList',
  data () {
    return {
      userList: []
    }
  },
  async created () {
    await this.loadUserList()
  },
  methods: {
    async loadUserList () {
      try {
        const userApi = new UserApi()
        this.userList = await userApi.getUserList(localStorage.getItem('jwt'))
      } catch (error) {
        console.error('Ошибка загрузки списка игр: ', error)
      }
    }
  }
}
</script>
