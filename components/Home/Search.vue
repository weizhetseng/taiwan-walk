<script setup lang="ts">
const type = [
  { value: 1, title: '探索景點' },
  { value: 2, title: '節慶活動' },
  { value: 3, title: '品嚐美食' }
]
const isType = ref<{ value: number; title: string }>({ value: 1, title: '探索景點' })

function handleChangeType(item: { value: number; title: string }) {
  isType.value = item
  isSelect.value = !isSelect.value
}

const isSelect = ref(false)
const selectRef = ref<HTMLElement | null>(null)

function closeSelect(event: Event) {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isSelect.value = false
  }
}

const placeholderText = computed(() => {
  switch (isType.value.value) {
    case 1:
      return '你想去哪裡？請輸入關鍵字'
    case 2:
      return '想找有趣的？請輸入關鍵字'
    case 3:
      return '你想吃什麼？請輸入關鍵字'
    default:
      return '你想去哪裡？請輸入關鍵字'
  }
})

onMounted(() => {
  document.addEventListener('click', closeSelect)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeSelect)
})
</script>


<template>
  <div
    class="mb-10 flex flex-col items-center justify-center gap-8 px-5 md:flex-row lg:mb-15 lg:gap-20 lg:px-[140px]"
  >
    <div class="flex justify-end">
      <div>
        <h1
          class="mb-3 text-center text-[28px] leading-normal md:text-left md:text-3xl xl:mb-4 xl:text-5xl xl:leading-normal"
        >
          探索<span class="border-green_5 border-b-2 pb-1">台灣之美</span><br />讓我們更親近這片土地
        </h1>
        <h2 class="flex items-center">
          <img
            src="@/assets/image/pinY.svg"
            alt=""
          />
          <div class="flex items-end">
            <p class="text-sm text-gray_3 md:text-base xl:text-xl">台灣旅遊景點導覽</p>
            <p class="ml-1 text-xs text-gray_3 md:text-sm xl:text-lg">Taiwan Travel Guide</p>
          </div>
        </h2>
      </div>
    </div>
    <div class="w-full max-w-[350px]">
      <div
        ref="selectRef"
        class="relative mb-2"
      >
        <div
          class="after:bg-selectArrow relative h-12.5 rounded-md border border-gray_4 px-7.5 py-2.5 text-green_3 after:absolute after:right-2.5 after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:bg-center after:bg-no-repeat after:content-['']"
          :class="{ 'after:rotate-180': isSelect }"
          @click="isSelect = !isSelect"
        >
          {{ isType.title }}
        </div>

        <ul
          v-show="isSelect"
          class="absolute top-full z-50 w-full translate-y-2.5 overflow-hidden rounded-md bg-white text-green_3"
        >
          <li
            v-for="item in type"
            :key="item.value"
            class="border_gray_1 border px-7.5 py-2.5"
            @click="handleChangeType(item)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <input
        type="text"
        :placeholder="placeholderText"
        class="mb-2 h-12.5 w-full rounded-md border border-gray_4 bg-gray_2 px-7.5 py-2.5"
      />
      <button
        type="submit"
        class="flex h-12.5 w-full items-center justify-center gap-2.5 rounded-md bg-green_2 font-bold text-white"
      >
        <img
          src="@/assets/image/search.svg"
          alt="search"
        />
        <span class="tracking-[16px]">搜尋</span>
      </button>
    </div>
  </div>
</template>
