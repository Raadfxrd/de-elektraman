<script setup lang="ts">
import type {Component} from 'vue'
import {CheckIcon} from '@heroicons/vue/24/solid'

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
      class="p-8 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
    <div
        :class="[
      'w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6',
      centered ? 'mx-auto' : ''
    ]">
      <component :is="icon" class="w-8 h-8 text-primary"/>
    </div>
    <h3
        :class="[
      'text-2xl font-bold mb-3 text-secondary',
      centered ? 'text-center' : ''
    ]">
      {{ title }}
    </h3>
    <p
        :class="[
      'leading-relaxed text-gray-700 mb-6',
      centered ? 'text-center' : ''
    ]">
      {{ description }}
    </p>
    <ul class="space-y-2 text-gray-700 text-sm">
      <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-3">
        <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>
