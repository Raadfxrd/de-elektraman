<script setup lang="ts">
interface Props {
  title: string
  description?: string
  subtitle?: string
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  description: '',
  subtitle: '',
  centered: true
})
</script>

<template>
  <div
      :class="[
    'mb-16',
    centered ? 'text-center' : ''
  ]">
    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">
      {{ title }}
    </h2>
    <p
        v-if="description" :class="[
      'text-xl text-gray-600',
      centered ? 'max-w-2xl mx-auto' : ''
    ]">
      {{ description }}
    </p>
    <p
        v-if="subtitle" :class="[
      'text-xl text-gray-700 mt-2',
      centered ? 'max-w-2xl mx-auto' : ''
    ]">
      {{ subtitle }}
    </p>
  </div>
</template>
