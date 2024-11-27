<script setup lang="ts">
defineProps({
  isNav: Boolean
})

const emit = defineEmits(['handleNav'])

function buttonClick() {
  emit('handleNav')
}
</script>

<template>
  <div class="relative flex items-center justify-center sm:hidden">
    <NuxtLink to="/">
      <img
        src="@/assets/image/Logo-mobile.svg"
        alt=""
      />
    </NuxtLink>
    <button
      type="button"
      class="bg-green_4 absolute right-0 top-1/2 z-[99] flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-xl"
      @click="buttonClick"
    >
      <div class="flex flex-col items-end justify-center gap-1">
        <span
          class="h-1 rounded-full bg-white duration-500"
          :class="isNav ? 'w-7.5 translate-y-2 rotate-45' : 'w-5'"
        ></span>
        <span
          class="h-1 w-7.5 rounded-full bg-white duration-500"
          :class="{ 'translate-x-1 opacity-0': isNav }"
        ></span>
        <span
          class="h-1 rounded-full bg-white duration-500"
          :class="isNav ? 'w-7.5 -translate-y-2 -rotate-45' : 'w-5'"
        ></span>
      </div>
    </button>
  </div>
</template>
