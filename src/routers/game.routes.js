import gameList from './components/gameList.vue'
import gameInfo from './components/gameInfo.vue'

export default {
    path: '/game',
    children: [
        { path: 'list', component: gameList },
        { path: ':id', component: gameInfo },    
    ]
};