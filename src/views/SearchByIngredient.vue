<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold text-orange-600 mb-3">Ingredients</h1>

        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Ingredients"
        v-model="keyword"
        />

        <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" 
        v-for="ingredient of ingredients" :key="ingredient.idIngredient"
        class="block bg-white shadow-md rounded p-3 mb-3"
        >
        <h3 class="text-2xl mb-2 ">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
        </router-link>
    </div>
    </template>
    
<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosclient';


const keyword = ref('')
const ingredients = ref([])

    onMounted(() => {
        axiosClient.get('/list.php?i=list')
        .then(({data}) => {
            ingredients.value = data.meals
        })
    })
</script>