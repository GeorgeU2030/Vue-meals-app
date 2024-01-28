<template>
    <div class="w-1/2 mx-auto">
        <h1 class="text-5xl font-semibold mb-5 py-2 text-center">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 md:grid-cols-3 py-3">
            <div class="font-semibold text-center">
                Category: {{ meal.strCategory }}
            </div>
            <div class="font-semibold text-center">
                Area: {{ meal.strArea }}
            </div>
            <div class="font-semibold text-center">
                Tags: {{ meal.strTags }}
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 w-1/2 mx-auto pt-3">
        <div class="text-center">
            <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul>
                <template v-for="(el,index) of new Array(20)">
                <li v-if="meal[`strIngredient${index+1}`]">
                {{ index+1 }}. {{  meal[`strIngredient${index+1}`] }}
                </li>
                </template>
            </ul>
        </div>
        <div class="text-center">
            <h2 class="text-2xl font-semibold mb-3">Measures</h2>
            <ul>
                <template v-for="(el,index) of new Array(20)">
                <li v-if="meal[`strMeasure${index+1}`]">
                {{ index+1 }}. {{  meal[`strMeasure${index+1}`] }}
                </li>
                </template>
            </ul>
        </div>
        
    </div>
    <div class="w-1/2 mx-auto py-4">
        <div class="flex justify-center">
        <a :href="meal.strYoutube" target="_blank" class="bg-red-600 rounded px-1 py-1 w-1/4 text-center text-white">YouTube</a>
        <a :href="meal.strSource" target="_blank" class="bg-amber-600 rounded px-1 py-1 w-1/4 text-center text-white">Source</a>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosclient';

const route = useRoute()
const meal = ref({})

onMounted( () => {
    axiosClient.get('lookup.php?i=' + route.params.id)
    .then(({data}) => {
        meal.value = data.meals[0] || {}
    })
})
</script>