<script setup lang="ts">
defineProps<{
  isNav: boolean
  navList: {
    Title: string
    Link: string
  }[]
}>()

const emit = defineEmits(['handleNav'])

function buttonClick() {
  emit('handleNav')
}
</script>

<template>
  <div
    :class="isNav ? 'visible opacity-100' : 'invisible opacity-0'"
    class="fixed left-0 top-0 z-50 h-full w-full bg-black_1 duration-500"
  >
    <div
      class="absolute right-0 top-0 w-[90%] origin-top-right rounded-bl-3xl bg-white duration-500 sm:w-4/5"
      :class="isNav ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
    >
      <div class="flex items-center justify-center px-2 py-4">
        <img
          src="@/assets/image/Logo-mobile.svg"
          alt="taiwan-walk"
          class="block sm:hidden"
        />
      </div>
      <ul>
        <li
          v-for="link in navList"
          :key="link.Link"
          class="border-b border-gray_1 last:border-b-0"
        >
          <RouterLink
            :to="link.Link"
            class="block p-6 text-center text-xl text-gray_3"
            @click.prevent="buttonClick"
            >{{ link.Title }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
