<script lang="ts" setup>
import CardIngredients from '@/components/CardIngredients.vue'
import DefaultButton from '@/components/DefaultButton.vue'
import FaviconGreen from '@/components/icons/FaviconGreen.vue'
import FaviconOrange from '@/components/icons/FaviconOrange.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import MilkAndEggsIcon from '@/components/icons/MilkAndEggsIcon.vue'
import VegetablesIcon from '@/components/icons/VegetablesIcon.vue'
import IngredientsTag from '@/components/IngredientsTag.vue'
import RecipeCard from '@/components/RecipeCard.vue'
</script>
<template>
  <div class="flex flex-row gap-4 p-8">
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
      <IngredientsTag>enable</IngredientsTag>
      <IngredientsTag disabled>disable</IngredientsTag>
      <DefaultButton @click-event="console.log('click')">Default Button NotFull</DefaultButton>
      <DefaultButton isFull @click-event="console.log('click')">Default Button Full</DefaultButton>
    </div>
    <div class="flex flex-col gap-4 p-8">
      <h2>Componentes</h2>
      <CardIngredients>
        <template v-slot:icon>
          <MilkAndEggsIcon />
        </template>
        <template v-slot:category> Laticínios e Ovos </template>
      </CardIngredients>
      <RecipeCard title="Receita sem imagem" />
      <RecipeCard
        title="Receita com imagem"
        image="https://images.pexels.com/photos/33598446/pexels-photo-33598446.jpeg"
      />
    </div>
  </div>
</template>
