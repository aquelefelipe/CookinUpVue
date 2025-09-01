<script lang="ts" setup>
import { tv, type VariantProps } from 'tailwind-variants/lite'

const styleButton = tv({
  base: {},
  variants: {
    type: {
      default:
        'px-3 py-2 rounded-8 flex flex-row items-center justify-center w-fit gap-2 text-neutral-10 font-semibold',
      outline: '',
      link: '',
    },
    size: {
      sm: 'text-bodySmall w-[8.5rem] h-[2.125rem] ',
      md: 'text-bodyMedium w-[11.625rem] h-[2.812rem] ',
      lg: 'text-bodyLarge w-[13.5rem] h-[3.5rem]',
    },
    hierarchy: {
      primary:
        'bg-primary-main hover:bg-primary-hover active:bg-primary-pressed focus:bg-primary-focus disabled:bg-primary-border',
      secondary:
        'bg-secondary-main hover:bg-secondary-hover active:bg-secondary-pressed focus:bg-secondary-focus disabled:bg-secondary-border',
      success:
        'bg-success-main hover:bg-success-hover active:bg-success-pressed focus:bg-success-focus disabled:bg-success-border',
      error:
        'bg-error-main hover:bg-error-hover active:bg-error-pressed focus:bg-error-focus disabled:bg-error-border',
      info: 'bg-info-main hover:bg-info-hover active:bg-info-pressed focus:bg-info-focus disabled:bg-info-border',
      dark: 'bg-neutral-80 hover:bg-neutral-90 active:bg-neutral-100 focus:bg-neutral-80 disabled:bg-neutral-50',
    },
  },
  defaultVariants: {
    type: 'default',
    size: 'md',
    hierarchy: 'primary',
  },
})

type ButtonVariantProps = VariantProps<typeof styleButton>

const { type, size, hierarchy } = defineProps<ButtonVariantProps>()
</script>

<template>
  <button :class="styleButton({ type, size, hierarchy })">
    <slot name="FrontIcon"></slot>
    <slot></slot>
    <slot name="BackIcon"></slot>
  </button>
</template>
