<template>
    <header class="bg-white shadow h-16 flex justify-between items-center w-screen">
      <router-link :to="{name: 'Home'}" class="inline-block p-4 font-bold text-orange-600 text-2xl ml-3">
        Home
      </router-link>
      <div class="flex items-center gap-4">
        <router-link :to="{name: 'byName'}" class="px-2 h-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-400">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}"  class="px-2 h-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-400" >
          Meals By Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}"  class="px-2 h-full bg-orange-600 text-white font-semibold py-3 rounded-lg mr-4 hover:bg-orange-400">
          Meals By Ingredients
        </router-link>
      </div>
    </header>
</template>