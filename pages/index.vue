<script setup lang="ts">
import actives from '@/data/active.json'
import restaurants from '@/data/restaurant.json'
import scenics from '@/data/scenic.json'
</script>

<template>
  <main class="pb-15 pt-2 md:pb-30 md:pt-10 lg:pt-20">
    <HomeSearch />
    <HomeBanner :scenics="scenics" />
    <HomeActive :actives="actives" />
    <HomeScenics :scenics="scenics" />
    <HomeRestaurant :restaurants="restaurants" />
  </main>
</template>
