<script setup lang="ts">
const { disabled = false } = defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <div
    class="box-border flex w-fit rounded-lg p-2"
    :class="{
      'bg-coral hover:bg-ocre': !disabled,
      'bg-cinzaClaro': disabled,
    }"
  >
    <span class="text-lg font-bold" :class="{ 'text-cinza': disabled, 'text-creme': !disabled }"
      ><slot></slot
    ></span>
  </div>
</template>
