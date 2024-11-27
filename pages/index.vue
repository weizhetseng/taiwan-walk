<script setup lang="ts">
import actives from '@/data/active.json'
import restaurants from '@/data/restaurant.json'
import scenics from '@/data/scenic.json'
</script>

<template>
  <main class="pb-15 pt-20 lg:pb-30">
    <HomeBanner :scenics="scenics" />
    <HomeActive :actives="actives" />
    <HomeScenics :scenics="scenics" />
    <HomeRestaurant :restaurants="restaurants" />
  </main>
</template>
