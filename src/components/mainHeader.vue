<template>
  <header class="header">
      <router-link class="header_title" to="/home">Хроники настолок</router-link>
      <button class="header-button" @click="$router.push('/user/account')">Личный кабинет</button>
  </header>
</template>

<script>
import './styles/Header.css'

export default {}
</script>
