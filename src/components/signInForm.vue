<template>
  <div class="form-auth__wrapper" id="reg">
    <div id="alert" v-if="alert">{{ alert }}</div>
    <p class="main-text">Войти в систему</p>
    <form @submit.prevent="signin">
      <div class="form__text">
        Email
        <input class="form-auth__input" type="email" v-model="email" />
      </div>
      <div class="form__text">
        Password
        <input class="form-auth__input" type="password" v-model="password" />
      </div>
      <div class="button-center">
        <button class="button-auth" type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import { UserApi } from '@/api/User'
import './styles/Auth.css'

export default {
  data () {
    return {
      email: '',
      password: '',
      alert: ''
    }
  },
  methods: {
    signin () {
      this.alert = ''
      const userApi = new UserApi()
      this.userToken = userApi.signIn({
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/home')
      }).catch((error) => {
        this.alert = error.message
      })
    }
  }
}
</script>
