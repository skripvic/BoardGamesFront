import userList from '@/components/userList.vue'
import userAccount from '@/components/userAccount.vue'

export default {
  routes: [
    { path: '/user/list', component: userList },
    { path: '/user/account', component: userAccount }
  ]
}
