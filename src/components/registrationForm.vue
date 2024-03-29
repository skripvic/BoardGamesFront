<template>
  <div class="form-auth__wrapper" id="reg">
    <div id="alert" v-if="alert">{{ alert }}</div>
    <p class="main-text">Регистрация</p>
    <form @submit.prevent="register">
      <div class="form__text">
        Email
        <input class="form-auth__input" type="email" v-model="email" />
      </div>
      <div class="form__text">
        Name
        <input class="form-auth__input" type="text" v-model="name" />
      </div>
      <div class="form__text">
        Password
        <input class="form-auth__input" type="password" v-model="password" />
      </div>
      <div class="form__text">
        Verify password
        <input class="form-auth__input" type="password" v-model="passwordVerify" />
      </div>
      <div class="button-center">
        <button class="button-auth" type="submit">Регистрация</button>
      </div>
    </form>
  </div>
</template>

<script>
import { UserApi } from '@/api/User'
import './styles/Auth.css'
import { auth } from '@/states/auth'

export default {
  data () {
    return {
      email: '',
      name: '',
      password: '',
      passwordVerify: '',
      alert: ''
    }
  },
  methods: {
    register () {
      this.alert = ''
      if (this.password !== this.passwordVerify) {
        this.alert = 'Passwords must match'
        return
      }
      const userApi = new UserApi()
      const userToken = userApi.registration({
        email: this.email,
        userName: this.name,
        password: this.password
      }).then(() => {
        this.$router.push('/home')
      }).catch((error) => {
        this.alert = error.message
      })
      auth.login(userToken.jwt)
    }
  }
}
</script>
