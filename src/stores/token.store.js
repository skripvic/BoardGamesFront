import { defineStore } from 'pinia'

export const tokenStore = defineStore('user', {
  state: () => ({ jwt: '' }),
  getters: {
    getJwtToken: () => jwt
  },
  actions: {
    setJwtToken(jwt) {
      this.jwt = jwt
    }
  }
})