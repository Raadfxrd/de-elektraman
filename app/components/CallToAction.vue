<script setup lang="ts">
interface Props {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  darkMode?: boolean
}

withDefaults(defineProps<Props>(), {
  darkMode: false
})
</script>

<template>
  <section
      :class="[
    'py-16 md:py-20 px-6',
    darkMode ? 'bg-gray-900' : ''
  ]">
    <div
        :class="[
      'container mx-auto text-center',
      darkMode ? 'text-white' : ''
    ]">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h2>
      <p
          :class="[
        'text-xl mb-8 max-w-2xl mx-auto',
        darkMode ? 'opacity-95' : 'text-gray-700'
      ]">
        {{ description }}
      </p>
      <NuxtLink
          :to="buttonLink"
          class="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg"
      >
        {{ buttonText }}
      </NuxtLink>
    </div>
  </section>
</template>
