import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({ accessToken: '', refreshToken: '' }),
  getters: {
    doubleCount: (state) => state.count * 2,
    isLogged() {
      //something
    }
  },
  actions: {
    refreshTokens(accessToken, refreshToken) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken
    },
  },
});