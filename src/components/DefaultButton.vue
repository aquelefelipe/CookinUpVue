<script lang="ts" setup>
const { isFull } = defineProps<{ isFull?: boolean }>()
</script>
<template>
  <button
    @click="$emit('clickEvent')"
    class="bg-coral hover:bg-ocre text-bold text-creme rounded-32 text-paragraph whitespace-nowrap px-4 py-2 text-center"
    :class="{ 'w-fit': !isFull, 'w-full': isFull }"
  >
    <slot></slot>
  </button>
</template>
