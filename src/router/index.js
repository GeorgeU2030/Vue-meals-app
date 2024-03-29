import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import MealsIngredient from '../views/MealsIngredient.vue'

const routes = [

    {
        path:'/',
        component: DefaultLayout,
        children: [
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
                path: '/ingredients/',
                name: 'Ingredients',
                component: SearchByIngredient,
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsIngredient,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router