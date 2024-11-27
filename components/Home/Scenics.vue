<script setup lang="ts">
defineProps<{
  scenics: Scenic[]
}>()
</script>

<template>
  <div class="mb-9 pl-4 lg:container">
    <div class="mb-2 flex items-end justify-between pr-4 lg:mb-3 lg:pr-0">
      <h3 class="text-2xl lg:text-4xl">熱門打卡景點</h3>
      <NuxtLink
        to="/scenic"
        class="flex items-center gap-2 text-orange_1"
        >查看更多景點<img
          src="@/assets/image/more.svg"
          alt=""
      /></NuxtLink>
    </div>
    <ul class="flex gap-4 overflow-auto pr-4 lg:gap-7.5 lg:pr-0">
      <li
        v-for="scenic in scenics"
        :key="scenic.ScenicSpotID"
        class="group w-full lg:w-1/4"
      >
        <NuxtLink to="#">
          <div class="h-40 min-w-55 overflow-hidden rounded-2xl lg:h-50">
            <img
              :src="scenic.Picture?.PictureUrl1"
              :alt="scenic.Picture?.PictureDescription1"
              class="mb-1.5 h-full w-full object-cover duration-300 group-hover:scale-110"
            />
          </div>
          <h4 class="mb-1.5 text-lg font-bold lg:text-[22px]">{{ scenic.ScenicSpotName }}</h4>
          <div class="flex items-center gap-1">
            <img
              src="@/assets/image/pin.svg"
              alt=""
            />
            <p class="truncate">{{ scenic.Address }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
