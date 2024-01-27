import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: SearchByName,
    },
    {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredient',
        component: SearchByIngredient,
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: SearchByLetter,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router