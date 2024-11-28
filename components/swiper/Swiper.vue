<script setup lang="ts">
import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const swiperRef = ref<HTMLElement | null>(null)

const props = defineProps<{
  loop?: boolean
  effect?: SwiperOptions['effect']
  slidesPerView?: SwiperOptions['slidesPerView']
  spaceBetween?: SwiperOptions['spaceBetween']
  pagination?: SwiperOptions['pagination']
  navigation?: SwiperOptions['navigation']
  autoplay?: SwiperOptions['autoplay']
  modules?: SwiperOptions['modules']
}>()

onMounted(() => {
  if (swiperRef.value) {
    new Swiper(swiperRef.value, {
      ...props
    })
  }
})
</script>

<template>
  <div
    ref="swiperRef"
    class="swiper"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="pagination"></div>
    <div
      class="absolute left-0 top-1/2 z-50 hidden w-full -translate-y-1/2 justify-between px-7.5 md:flex"
    >
      <div
        class="prevBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white"
      >
        <img
          src="@/assets/image/prev.svg"
          alt="prev"
        />
      </div>
      <div
        class="nextBtn flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white"
      >
        <img
          src="@/assets/image/next.svg"
          alt="next"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 20px;
  height: 20px;
}

:deep(.swiper-pagination-bullets) {
  position: absolute;
  padding-bottom: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
  right: 0;
  bottom: 0;
}

@media (max-width: 1024px) {
  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
  }

  :deep(.swiper-pagination-bullets) {
    padding-bottom: 12px;
    padding-right: 12px;
  }
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style>
