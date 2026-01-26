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
  <div class="flex gap-4">
    <div
        :class="[
      'shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold',
      iconSize === 'large' ? 'w-10 h-10' : 'w-8 h-8'
    ]">
      <CheckIcon :class="iconSize === 'large' ? 'w-6 h-6' : 'w-5 h-5'"/>
    </div>
    <div>
      <h4 class="text-xl font-bold mb-2 text-secondary">{{ title }}</h4>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>
