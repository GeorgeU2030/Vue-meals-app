<template>
    <div class="flex flex-col items-center justify-center p-8 bg-gray-100">
      <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"/>
  
      <div class="flex flex-wrap justify-center mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter"
                     class="m-1 px-2 py-1  rounded">
          {{ letter }}
        </router-link>
      </div>
    </div>
  </template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import store from '../store';
import axiosClient from '../axiosclient'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const ingredients = ref([])

onMounted(async () => {
    const res=await axiosClient.get("/list.php?i=list")
    console.log(res.data)
    ingredients.value = res.data
})
</script>