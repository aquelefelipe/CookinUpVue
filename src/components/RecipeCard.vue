<script setup lang="ts">
import UnavailableImageIcon from './icons/UnavailableImageIcon.vue'
const { title, image } = defineProps<{ title: string; image?: string }>()
</script>

<template>
  <div class="flex flex-col">
    <div class="bg-coralClaro w-full">
      <img v-if="image" :src="image" alt="foto da receita" class="rounded-t-md object-cover" />
      <div v-else class="flex flex-col items-center justify-center rounded-t-md py-[14px]">
        <UnavailableImageIcon />
        <span class="text-coral text-paragraph">Imagem indisponível</span>
      </div>
    </div>
    <div class="flex w-full justify-center rounded-b-md bg-white py-8">
      <span class="text-cinza text-paragraph">{{ title }}</span>
    </div>
  </div>
</template>
