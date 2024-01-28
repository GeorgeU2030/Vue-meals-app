<template>
    <div class="flex flex-col items-center justify-center p-8 bg-gray-100">
    
  
    </div>
  </template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import store from '../store';
import axiosClient from '../axiosclient'

const ingredients = ref([])

onMounted(async () => {
    const res=await axiosClient.get("/list.php?i=list")
    console.log(res.data)
    ingredients.value = res.data
})
</script>