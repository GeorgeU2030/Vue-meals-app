<template>
    <div class="p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
        v-model="keyword"
        @change="searchmeals"/>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-orange-600 text-white font-semibold rounded" >
            <router-link to="/">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded w-full h-48 object-cover">
            </router-link>
            <h3 class="px-3 py-2 text-xl">{{ meal.strMeal }}</h3>
            <div class="px-3 py-2">
                <a :href="meal.strYoutube" target="_blank" class="bg-red-600 rounded px-1 py-1">YouTube</a>
               <router-link to="/" class="bg-amber-700 rounded px-1 py-1 ml-2">
                View
               </router-link>
            </div>
        </div>
    </div>
    </template>
    
<script setup>
    import { ref, computed, onMounted } from 'vue'
    import store from '../store';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const keyword = ref('')
    const meals = computed(() => store.state.searchedMeals)
    function searchmeals() {
        store.dispatch('searchMeals', keyword.value)
    }

    onMounted(() => {
        keyword.value= route.params.name
        if (keyword.value){
            searchmeals()
        }
    })
</script>