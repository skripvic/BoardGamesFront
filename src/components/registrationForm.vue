<template>
  <div id="reg">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="signupWithPassword">
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
      <label>
        Password
        <input type="password" v-model="password" />
      </label>
      <label>
        Verify password
        <input type="password" v-model="passwordVerify" />
      </label>
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import { UserApi } from '@/api/User'

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
    signupWithPassword () {
      this.alert = ''
      if (this.password !== this.passwordVerify) {
        this.alert = 'Passwords must match'
        return
      }
      const userApi = new UserApi()
      this.userToken = userApi.registration({
        email: this.email,
        userName: this.name,
        password: this.password
      }).catch((error) => {
        this.alert = error.message
      })
    }
  }
}
</script>

<style>
</style>
