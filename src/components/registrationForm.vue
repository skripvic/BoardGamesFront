<template>
  <div class="form-auth__wrapper" id="reg">
    <div id="alert" class="text-alert" v-if="alert">{{ alert }}</div>
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
        <input class="form-auth__input" type="password" v-model="password" @input="validatePassword"/>
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
    validatePassword () {
      const regex = /^(?=.*\d).{6,}$/
      if (!regex.test(this.password)) {
        this.alert = 'Пароль должен содержать минимум 6 символов и хотя бы одну цифру'
      }
    },
    async register () {
      this.alert = ''
      if (this.password !== this.passwordVerify) {
        this.alert = 'Passwords must match'
        return
      }
      const userApi = new UserApi()
      try {
        const userToken = await userApi.registration({
          email: this.email,
          name: this.name,
          password: this.password
        })
        console.log(userToken.jwt)
        localStorage.removeItem('jwt')
        localStorage.setItem('jwt', userToken.jwt)
        localStorage.setItem('isLoggedIn', 'true')
        this.$router.push('/home')
      } catch (error) {
        this.alert = error.message
      }
    }
  }
}
</script>
