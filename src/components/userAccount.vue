<template>
  <div class="text-userInfo">
  <p class="list-userList-title">Личный кабинет</p>
  <p>Ваше имя: {{ userInfo.name }}</p>
  <p>Ваш email: {{ userInfo.email }}</p>
  <br/>
  <button class="button-main" @click="$router.push('/collection/list')">Список коллекций</button>
  <br/>
  <button class="button-main" @click="signOut()">Выйти из аккаунта</button>
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
        const userApi = new UserApi()
        this.userInfo = await userApi.getUserInfo(localStorage.getItem('jwt'))
      } catch (error) {
        this.alert = error.message
      }
    },
    signOut () {
      localStorage.clear()
      this.$router.push('/home')
    }
  }
}
</script>
