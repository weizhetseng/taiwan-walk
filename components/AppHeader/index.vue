<script setup lang="ts">
const isNav = ref(false)

function handleNav() {
  isNav.value = !isNav.value
}

const navList = [
  {
    Title: '探索景點',
    Link: '/scenic'
  },
  {
    Title: '節慶活動',
    Link: '/active'
  },
  {
    Title: '品嚐美食',
    Link: '/restaurant'
  }
]
</script>

<template>
  <header class="border-b border-gray_1 px-2 py-4 sm:px-4 sm:py-6 lg:px-[45px]">
    <AppHeaderDesktop :nav-list="navList" />
    <AppHeaderMobile
      :is-nav="isNav"
      @handle-nav="handleNav"
    />
    <AppHeaderMobileNav
      :nav-list="navList"
      :is-nav="isNav"
      @handle-nav="handleNav"
    />
  </header>
</template>
