<template>
    <div class="all-text">
        <p class="main-text">Добро пожаловать в "Хроники настолок"!</p>
        <p class="subtext">
            Это сайт, где вы можете сохранять информацию о настольных играх, добавлять игры в свои коллекции.
        </p>
        <p class="subtext">
            Также есть возможность сохранения информации о партиях для ведения статистики в ваших игровых посиделках с друзьями.
        </p>
        <p class="small-subtext">
            Хотя последнее предложение это неправда, потому что я ничего не успеваю.
        </p>
    </div>
    <div class="all-text" v-if="getIsLoggedIn ()">
        <button class="button-main" @click="$router.push('/user/account')">Личный кабинет</button>
        <br/>
        <button class="button-main" @click="$router.push('/game/list')">Список игр</button>
        <br/>
        <button class="button-main" @click="$router.push('/user/list')">Список пользователей</button>
    </div>
    <div class="all-text" v-else>
        <button class="button-main" @click="$router.push('/auth/register')">Регистрация</button>
        <br/>
        <button class="button-main" @click="$router.push('/auth/signin')">Войти</button>
    </div>
</template>

<script>
import './styles/MainPage.css'

export default {
  methods: {
    getIsLoggedIn () {
      return localStorage.getItem('isLoggedIn')
    }
  }
}
</script>
