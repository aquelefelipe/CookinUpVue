<script lang="ts" setup>
import FaviconGreen from '@/components/icons/FaviconGreen.vue'
import FaviconOrange from '@/components/icons/FaviconOrange.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import MilkAndEggsIcon from '@/components/icons/MilkAndEggsIcon.vue'
import VegetablesIcon from '@/components/icons/VegetablesIcon.vue'
import IngredientsTag from '@/components/IngredientsTag.vue'
</script>
<template>
  <div class="flex flex-row gap-4 bg-white p-8">
    <div class="flex flex-col gap-4 p-8">
      <h2>Favicons</h2>
      <FaviconOrange />
      <FaviconGreen />
      <LogoIcon width="190" height="80" />
    </div>
    <div class="flex flex-col gap-4 p-8">
      <h2>Icons</h2>
      <MilkAndEggsIcon />
      <VegetablesIcon />
    </div>
    <div class="flex flex-col gap-4 p-8">
      <h2>Componentes</h2>
      <IngredientsTag>Alho</IngredientsTag>
      <div class="bg-verdeEscuro">
        <IngredientsTag disabled>Alho</IngredientsTag>
      </div>
    </div>
  </div>
</template>
