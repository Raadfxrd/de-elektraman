<script setup lang="ts">
import {CheckIcon} from '@heroicons/vue/24/solid'

interface Props {
  title: string
  description: string
  iconSize?: 'small' | 'large'
}

withDefaults(defineProps<Props>(), {
  iconSize: 'small'
})
</script>

<template>
  <div class="flex gap-3 md:gap-4">
    <div
        :class="[
      'shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold',
      iconSize === 'large' ? 'w-9 h-9 md:w-10 md:h-10' : 'w-7 h-7 md:w-8 md:h-8'
    ]">
      <CheckIcon :class="iconSize === 'large' ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'"/>
    </div>
    <div>
      <h4 class="text-lg md:text-xl font-bold mb-1 md:mb-2 text-secondary">{{ title }}</h4>
      <p class="text-sm md:text-base text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>
