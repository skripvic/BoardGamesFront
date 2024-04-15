<template>
  <mainHeader/>
  <router-view></router-view>
</template>

<script>
import mainHeader from './components/mainHeader.vue'
import { UserApi } from './api/User'
import { router } from './routers'

export default {
  name: 'App',
  components: {
    mainHeader
  },
  created () {
    this.checkJwtToken()
  },
  beforeUnmount () {
    localStorage.clear()
    console.log('unmounted')
  },
  methods: {
    handleBeforeUnload () {
      localStorage.clear()
    },
    async checkJwtToken () {
      if (localStorage.getItem('isLoggedIn')) {
        console.log(localStorage.getItem('jwt'))
        if (localStorage.getItem('jwt')) {
          console.log('Jwt validation')
          const userApi = new UserApi()
          const isValid = await userApi.validateJwt({
            jwt: localStorage.getItem('jwt')
          }, localStorage.getItem('jwt'))
          console.log(isValid)
          if (!isValid) {
            localStorage.removeItem('jwt')
            localStorage.removeItem('isLoggedIn')
            localStorage.setItem('isLoggedIn', 'false')
            router.push('/home')
          }
        } else {
          localStorage.removeItem('jwt')
          localStorage.removeItem('isLoggedIn')
          localStorage.setItem('isLoggedIn', 'false')
          router.push('/home')
        }
      }
    }
  }
}
</script>

<style>
  html, body, #app {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
