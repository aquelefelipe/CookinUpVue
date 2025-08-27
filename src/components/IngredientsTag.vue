<script setup lang="ts">
const { disabled = false } = defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <div
    :class="{
      'bg-coral hover:bg-ocre': !disabled,
      'disabled:bg-coralClaro disabled:text-cinza': disabled,
      'box-border flex w-fit rounded-lg p-2': true,
    }"
  >
    <span class="text-creme text-2xl font-bold"><slot></slot></span>
  </div>
</template>
