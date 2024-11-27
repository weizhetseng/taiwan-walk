<script setup lang="ts">
import countrys from '@/data/country.json'

useSeoMeta({
  title: '品嚐美食 - Taiwan Walk - 探索台灣景點、美食與活動'
})

const isSelect = ref(false)
const selected = ref<{ title: string; value: string }>({ title: '全部縣市', value: '' })

function handleSelect(title: string, value: string) {
  selected.value = { title, value }
  isSelect.value = !isSelect.value
}

const dropDownRef = ref<HTMLElement | null>(null)

function test(event: Event) {
  if (dropDownRef.value && !dropDownRef.value.contains(event.target as Node)) {
    isSelect.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', test)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', test)
})
</script>
<template>
  <main class="pb-15 pt-6 md:pb-30 md:pt-15">
    <div class="container">
      <ul class="mb-10 flex flex-wrap items-center gap-2 text-gray_3">
        <li class="text-green_3">首頁</li>
        <li>/</li>
        <li>品嚐美食</li>
      </ul>
      <form
        action=""
        class="mb-6 flex flex-col gap-4 md:mb-15 lg:flex-row"
      >
        <div
          ref="dropDownRef"
          class="relative"
        >
          <div
            class="h-12.5 w-full cursor-pointer appearance-none rounded-md border border-gray_4 px-7.5 py-2.5 text-green_2 outline-green_2 lg:w-60"
            @click="isSelect = !isSelect"
          >
            {{ selected.title }}
          </div>
          <ul
            v-show="isSelect"
            class="absolute top-full z-50 max-h-[350px] w-full translate-y-2.5 overflow-auto rounded-md border border-gray_4 bg-white pb-5 pr-5"
          >
            <li
              v-for="country in countrys"
              :key="country.title"
              :value="country.value"
              class="cursor-pointer border-b border-gray_1 px-7.5 py-2.5 text-green_2 hover:bg-green_2 hover:text-white"
              @click="handleSelect(country.title, country.value)"
            >
              {{ country.title }}
            </li>
          </ul>
        </div>

        <input
          type="text"
          placeholder="你想吃什麼？請輸入關鍵字"
          class="h-12.5 w-full rounded-md border border-gray_4 bg-gray_2 px-7.5 py-2.5 outline-green_2 lg:flex-1"
        />
        <button
          type="submit"
          class="flex h-12.5 w-full items-center justify-center gap-2.5 rounded-md bg-green_2 font-bold text-white lg:w-50"
        >
          <img
            src="@/assets/image/search.svg"
            alt="search"
          />
          <span class="tracking-[16px]">搜尋</span>
        </button>
      </form>
      <div class="">
        <h1 class="mb-3 text-2xl md:text-4xl">熱門品嚐美食主題</h1>
        <ul class="-mx-2 flex flex-wrap gap-y-3 sm:-mx-4">
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant6.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                地方特產
              </p>
            </div>
          </li>
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant5.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                中式美食
              </p>
            </div>
          </li>
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant4.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                甜點冰品
              </p>
            </div>
          </li>
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant3.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                異國料理
              </p>
            </div>
          </li>
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant2.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                伴手禮
              </p>
            </div>
          </li>
          <li class="w-1/2 px-2 sm:w-1/3 sm:px-4 lg:w-1/4">
            <div
              class="relative cursor-pointer after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:rounded-3xl after:bg-black_1 after:content-['']"
            >
              <img
                src="@/assets/image/restaurant1.jpeg"
                alt=""
                class="h-20 w-full rounded-3xl object-cover sm:h-30 lg:h-40"
              />
              <p
                class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 text-center text-base font-bold text-white sm:text-lg lg:text-2xl"
              >
                素食
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>