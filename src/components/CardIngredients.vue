<script setup lang="ts">
import IngredientsTag from './IngredientsTag.vue'
</script>

<template>
  <div class="flex min-w-72 flex-col gap-8 rounded-2xl bg-white p-4 shadow-sm">
    <div class="flex flex-col items-center gap-2">
      <slot name="icon"></slot>
      <span class="text-verdeMedio text-bold text-2xl">
        <slot name="category"></slot>
      </span>
    </div>
    <div class="flex flex-row flex-wrap items-center justify-center gap-2">
      <IngredientsTag>Ing1</IngredientsTag>
      <IngredientsTag>Ing2</IngredientsTag>
      <IngredientsTag>Ing3</IngredientsTag>
      <IngredientsTag>Ing4</IngredientsTag>
      <IngredientsTag>Ing5</IngredientsTag>
    </div>
  </div>
</template>
