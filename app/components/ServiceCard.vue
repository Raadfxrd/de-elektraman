<script setup lang="ts">
import type {Component} from 'vue'
import {CheckIcon} from '@heroicons/vue/24/solid'

interface Props {
  icon: Component
  title: string
  description: string
  features?: string[]
}

defineProps<Props>()
</script>

<template>
  <div
      class="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
    <div class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
      <component :is="icon" class="w-8 h-8 text-primary"/>
    </div>
    <h3 class="text-2xl font-bold mb-3 text-secondary">{{ title }}</h3>
    <p class="leading-relaxed text-gray-600 mb-4">
      {{ description }}
    </p>
    <ul v-if="features && features.length > 0" class="space-y-2 text-gray-700">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
        <CheckIcon class="w-4 h-4 text-primary"/>
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

