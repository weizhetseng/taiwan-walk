<script setup lang="ts">
defineProps<{
  navList: {
    Title: string
    Link: string
  }[]
}>()
</script>

<template>
  <div class="mx-auto hidden max-w-[1536px] justify-between sm:flex 2xl:px-4">
    <NuxtLink to="/">
      <img
        src="@/assets/image/Logo-desktop.svg"
        alt=""
      />
    </NuxtLink>
    <nav>
      <ul class="flex items-center gap-5">
        <li
          v-for="link in navList"
          :key="link.Link"
        >
          <NuxtLink
            :to="link.Link"
            class="text-lg text-gray_3"
            >{{ link.Title }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
