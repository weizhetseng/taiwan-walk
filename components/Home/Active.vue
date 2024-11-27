<script setup lang="ts">
defineProps<{
  actives: Active[]
}>()
</script>

<template>
  <div class="mb-9 px-4 lg:container">
    <div class="mb-2 flex items-end justify-between pr-4 lg:mb-3 lg:pr-0">
      <h3 class="text-2xl lg:text-4xl">近期活動</h3>
      <NuxtLink
        to="/active"
        class="flex items-center gap-2 text-orange_1"
        >查看更多活動<img
          src="@/assets/image/more.svg"
          alt=""
      /></NuxtLink>
    </div>
    <ul class="-mx-4 flex flex-wrap gap-y-3">
      <li
        v-for="active in actives"
        :key="active.ActivityID"
        class="w-full px-4 lg:w-1/2"
      >
        <NuxtLink
          to=""
          class="md:border-gray_1 flex items-center gap-4 overflow-hidden rounded-xl md:items-stretch md:gap-0 md:border"
        >
          <div class="h-15 w-[90px] flex-shrink-0 md:h-40 md:w-40">
            <img
              class="h-full w-full rounded-lg object-cover md:rounded-none"
              :src="active.Picture?.PictureUrl1"
              :alt="active.Picture?.PictureDescription1"
            />
          </div>
          <div class="md:bg-gray_2 flex w-full flex-1 flex-col md:px-7.5 md:py-4">
            <p class="text-gray_3 mb-1 text-xs md:text-base">
              {{ $dayjs(active.StartTime).format('YYYY/MM/DD') }}
              <span>~</span>
              {{ $dayjs(active.EndTime).format('YYYY/MM/DD') }}
            </p>
            <h3 class="mb-1 line-clamp-2 text-base font-bold md:text-2xl">
              {{ active.ActivityName?.replace('轉知', '') }}
            </h3>
            <div class="mt-auto flex items-center justify-between gap-5 text-xs md:text-base">
              <p class="text-gray_3 max-w-25 md:max-w-39 flex items-center gap-1">
                <img
                  src="@/assets/image/pin.svg"
                  alt=""
                />
                <span class="truncate">{{ active.City || active.Address }}</span>
              </p>
              <p class="text-green_2 flex items-center gap-1">
                詳細介紹<img
                  src="@/assets/image/arrowRG.svg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
