<script setup lang="ts">
import type {Component} from 'vue'

interface Props {
  icon: Component
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div
      class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
    <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
      <component :is="icon" class="w-5 h-5"/>
    </div>
    <div>
      <h4 class="text-lg font-bold mb-1 text-secondary">{{ title }}</h4>
      <p class="text-gray-700 text-sm">{{ description }}</p>
    </div>
  </div>
</template>
