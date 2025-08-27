<script lang="ts" setup>
import LogoIcon from './icons/LogoIcon.vue'
</script>
<template>
  <div class="relative flex flex-col items-center gap-4 bg-[#263A29] px-16 py-24">
    <img
      src="../assets/BackgroundBanner.png"
      alt="background"
      class="absolute left-0 top-0 h-full w-full object-cover"
    />
    <div class="flex flex-col items-center gap-12">
      <LogoIcon color="#FFFAF3" />
      <div class="flex flex-col items-start">
        <span class="text-verdeMedio text-heading md:text-headingLarge"
          >Um banquete de ideias para</span
        >
        <span class="text-creme text-heading md:text-headingLarge"
          >despertar o chef que há em você</span
        >
        <span class="text-creme text-subtitle md:text-subtitleLarge"
          >Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!</span
        >
      </div>
    </div>
    <div>
      <img src="../assets/HeroMobile.png" alt="Hero" />
    </div>
  </div>
</template>
