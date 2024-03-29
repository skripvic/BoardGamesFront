import { ref, watch } from 'vue'
import { tokenStore } from '@/stores'
import { router } from '@/routers'

export default {
  auth () {
    const isLoggedIn = ref(false)

    const login = async (jwt) => {
      tokenStore.setJwtToken(jwt)
      isLoggedIn.value = true
      router.push('/home')
    }

    const logout = () => {
      isLoggedIn.value = false
      router.push('/auth/signin')
    }

    watch(isLoggedIn, async (newValue) => {
      if (tokenStore.getJwtToken) {
        if (newValue) {
          const isValid = false// await validate()
          if (!isValid) {
            logout()
          }
        } else {
          logout()
        }
      }
    })

    return {
      isLoggedIn,
      login,
      logout
    }
  }
}
