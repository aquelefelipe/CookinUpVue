<script lang="ts" setup>
import BaseButton from '@/components/Button/BaseButton.vue'
// import PlusIcon from '@/components/icons/PlusIcon.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <BaseButton hierarchy="primary" type="default" size="sm">Primary / Default / SM</BaseButton>
    <BaseButton hierarchy="primary" type="default" size="md">Primary / Default / MD</BaseButton>
    <BaseButton hierarchy="primary" type="default" size="lg">Primary / Default / LG</BaseButton>
  </div>
</template>
