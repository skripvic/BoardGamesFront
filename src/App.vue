<template>
  <mainHeader/>
  <router-link to="/game">
    <button>Посмотреть игры</button>
  </router-link>
  <reg/>
</template>

<script>
import reg from './components/registrationForm.vue'
import mainHeader from './components/mainHeader.vue'

export default {
  name: 'App',
  components: {
    reg,
    mainHeader
  }
}
</script>
