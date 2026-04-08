<script lang="ts" setup>
import type { Component } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

interface Props {
  icon: Component
  title: string
  description: string
  features: string[]
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: true
})
</script>

<template>
  <div
    class="p-6 md:p-8 rounded-xl bg-white border border-border">
    <div
      :class="[
      'w-12 h-12 md:w-16 md:h-16 bg-primary-light rounded-lg flex items-center justify-center mb-4 md:mb-6',
      centered ? 'mx-auto' : ''
    ]">
      <component :is="icon" class="w-6 h-6 md:w-8 md:h-8 text-primary" />
    </div>
    <h3
      :class="[
      'text-xl md:text-2xl font-bold mb-2 md:mb-3 text-secondary',
      centered ? 'text-center' : ''
    ]">
      {{ title }}
    </h3>
    <p
      :class="[
      'leading-relaxed text-sm md:text-base text-gray-700 mb-4 md:mb-6',
      centered ? 'text-center' : ''
    ]">
      {{ description }}
    </p>
    <ul class="space-y-2 text-gray-700 text-sm">
      <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
        <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>
