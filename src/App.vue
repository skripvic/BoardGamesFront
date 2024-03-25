<template>
  <mainHeader/>
  <router-view></router-view>
</template>

<script>
import mainHeader from './components/mainHeader.vue'

export default {
  name: 'App',
  components: {
    mainHeader
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
