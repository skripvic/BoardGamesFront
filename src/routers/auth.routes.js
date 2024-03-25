import registrationForm from './components/registrationForm.vue'
import signInForm from './components/signInForm.vue'

export default {
    path: '/auth',
    children: [
        { path: 'register', component: registrationForm },
        { path: 'signin', component: signInForm },    
    ]
};