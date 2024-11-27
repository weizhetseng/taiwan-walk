<script setup lang="ts">
defineProps<{
  restaurants: Restaurant[]
}>()
</script>

<template>
  <div class="pl-4 lg:container">
    <div class="mb-2 flex items-end justify-between pr-4 lg:mb-3 lg:pr-0">
      <h3 class="text-2xl lg:text-4xl">一再回訪美食</h3>
      <NuxtLink
        to="/restaurant"
        class="flex items-center gap-2 text-orange_1"
        >查看更多景點<img
          src="@/assets/image/more.svg"
          alt=""
      /></NuxtLink>
    </div>
    <ul class="flex gap-4 overflow-auto pr-4 lg:gap-7.5 lg:pr-0">
      <li
        v-for="restaurant in restaurants"
        :key="restaurant.RestaurantID"
        class="group w-full lg:w-1/4"
      >
        <NuxtLink to="#">
          <div class="h-40 min-w-55 overflow-hidden rounded-2xl lg:h-50">
            <img
              :src="restaurant.Picture?.PictureUrl1"
              :alt="restaurant.Picture?.PictureDescription1"
              class="mb-1.5 h-full w-full object-cover duration-300 group-hover:scale-110"
            />
          </div>
          <h4 class="mb-1.5 text-lg font-bold lg:text-[22px]">{{ restaurant.RestaurantName }}</h4>
          <div class="flex items-center gap-1">
            <img
              src="@/assets/image/pin.svg"
              alt=""
            />
            <p class="truncate">{{ restaurant.Address }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
