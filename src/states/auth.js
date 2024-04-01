
// const auth = {
//   login: async (jwt) => {
//     localStorage.removeItem('jwt');
//     localStorage.setItem('jwt', jwt)
//     localStorage.setItem('isLoggedIn', "true");
//   },

//   logout: () => {
//     localStorage.removeItem('jwt');
//     localStorage.setItem('isLoggedIn', "false");
//   }
// }

// export default auth

// class Auth {
//   constructor () {
//     this.isLoggedIn = ref(false)
//     this.store = tokenStore()
//   }

//   login = async (jwt) => {
//     this.store.setJwtToken(jwt)
//     this.isLoggedIn.value = true
//     console.log('jwt is ' + jwt)
//     router.push('/home')
//   }

//   logout = () => {
//     this.store.setJwtToken('')
//     this.isLoggedIn.value = false
//     console.log('')
//     router.push('/auth/signin')
//   }
// }

// export default {
//   created() {
//     this.checkJwtToken()
//   },
//   methods: {
//     async checkJwtToken() {
//     if (this.$store.getJwtToken) {
//       const userApi = new UserApi()
//       const isValid = await userApi.validateJwt(this.$store.getJwtToken)
//     if (!isValid) {
//         this.$store.logout()
//       }
//       } else {
//         this.$store.logout()
//       }
//     }
//   }
// }

// const authInstance = new Auth()

// watch(store.isLoggedIn, async (newValue) => {
//   if (store.getJwtToken) {
//     if (newValue) {
//       console.log('cur jwt is ' + store.getJwtToken)
//       const userApi = new UserApi()
//       const isValid = await userApi.validateJwt(store.getJwtToken)
//       if (!isValid) {
//         store.logout()
//       }
//     } else {
//       store.logout()
//     }
//   }
// })

// export default authInstance
