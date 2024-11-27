<script setup lang="ts">
useSeoMeta({
  title: 'Taiwan Walk - 探索台灣景點、美食與活動',
  description: 'Taiwan Walk 提供台灣旅遊景點、美食與活動的詳細資訊，讓您輕鬆規劃旅行。',
  ogTitle: 'Taiwan Walk - 台灣旅遊指南',
  ogDescription: '尋找台灣熱門景點、美食與最新活動，享受最完整的旅遊體驗。',
  ogImage: '/og-image.png',
  ogUrl: '',
  twitterTitle: 'Taiwan Walk - 台灣旅遊指南',
  twitterDescription: '輕鬆搜尋台灣景點、美食與活動，讓旅遊更有趣！',
  twitterImage: '/twitter-image.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'zh-Hant'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/icon',
      href: '/favicon.ico'
    }
  ]
})
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
