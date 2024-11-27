<script setup lang="ts">
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

defineProps<{
  scenics: Scenic[]
}>()
</script>

<template>
  <div class="mb-6 px-4 lg:container">
    <Swiper
      :loop="true"
      :effect="'fade'"
      :slides-per-view="1"
      :space-between="20"
      :pagination="{ el: '.pagination', type: 'bullets' }"
      :navigation="{
        nextEl: '.nextBtn',
        prevEl: '.prevBtn'
      }"
      :autoplay="{ delay: 2000 }"
      :modules="[Navigation, Pagination, Autoplay, EffectFade]"
    >
      <SwiperSlide
        v-for="scenic in scenics"
        :key="scenic.ScenicSpotID"
        class="swiper-slide relative"
      >
        <img
          :src="scenic.Picture?.PictureUrl1"
          :alt="scenic.Picture?.PictureDescription1"
          class="h-[185px] w-full rounded-3xl object-cover md:h-60 lg:h-100"
        />
        <p
          class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-white md:text-[28px]"
        >
          {{ scenic.ScenicSpotName }}
        </p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
