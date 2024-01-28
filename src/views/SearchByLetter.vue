<template>

    <div class="flex flex-wrap justify-center mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter"
                     class="m-1 px-2 py-1  rounded">
          {{ letter }}
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-orange-600 text-white font-semibold rounded" >
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
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
import {computed, onMounted, watch} from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute()

watch(route, () => {
    store.dispatch("searchMealsByLetter", route.params.letter)
})

onMounted(() => {
    store.dispatch("searchMealsByLetter", route.params.letter)
})

</script>