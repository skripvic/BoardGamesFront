<template>
  <div class="text-userInfo">
  <p class="list-userList-title">Личный кабинет</p>
  <p>Ваше имя: {{ userInfo.userName }}</p>
  <p>Ваш email:{{ userInfo.email }}</p>
  </div>
</template>

<script>
import { UserApi } from '@/api/User'
import './styles/User.css'

export default {
  name: 'userAccount',
  data () {
    return {
      userInfo: ''
    }
  },
  async created () {
    await this.loadGameInfo()
  },
  methods: {
    async loadGameInfo () {
      try {
        // get curUser
        const curUserId = '73ad6c78-cc3c-4c96-36df-08dc4c97c457'
        const userApi = new UserApi()
        this.userInfo = await userApi.getUserInfo(curUserId)
      } catch (error) {
        console.error('Ошибка загрузки игры: ', error)
      }
    }
  }
}
</script>
