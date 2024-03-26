import registrationForm from '@/components/registrationForm.vue'
import signInForm from '@/components/signInForm.vue'

export default {
  routes: [
    { path: '/auth/register', component: registrationForm },
    { path: '/auth/signin', component: signInForm }
  ]
}
