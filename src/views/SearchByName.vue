<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
        v-model="keyword"
        @change="searchmeals"/>
    </div>

    <div>
        <div v-for="meal of meals" :key="meal.idMeal">
            <img :src="meal.strMealThumb" :alt="meal.strMeal">
            <h3>{{ meal.strMeal }}</h3>
            <div>
                <a :href="meal.strYoutube" target="_blank">YouTube</a>
               <router-link to="/">
                View
               </router-link>
            </div>
        </div>
    </div>
    </template>
    
<script setup>
    import { ref, computed } from 'vue'
    import store from '../store';
    const keyword = ref('')
    const meals = computed(() => store.state.searchedMeals)
    function searchmeals() {
        store.dispatch('searchMeals', keyword.value)
    }
</script>