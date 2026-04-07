<script setup lang="ts">
interface Props {
  title: string
  highlightText?: string
  description: string
  primaryButton?: { text: string; to: string } | null
  secondaryButton?: { text: string; to: string } | null
  showImage?: boolean
  compact?: boolean
}

withDefaults(defineProps<Props>(), {
  highlightText: '',
  primaryButton: null,
  secondaryButton: null,
  showImage: false,
  compact: false
})
</script>

<template>
  <section
      :class="[
    'relative overflow-hidden px-6',
    compact ? 'py-16 md:py-24' : 'py-20'
  ]">
    <div class="container mx-auto">
      <div
          :class="[
        'gap-12 items-center',
        showImage ? 'grid md:grid-cols-2' : 'max-w-3xl'
      ]">
        <!-- Left Content -->
        <div class="space-y-6">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary">
            <template v-if="highlightText">
              {{ title }} <span class="text-primary">{{ highlightText }}</span>
            </template>
            <template v-else>
              {{ title }}
            </template>
          </h1>
          <p
              :class="[
            'text-base sm:text-lg md:text-xl leading-relaxed',
            compact ? 'text-gray-700' : 'text-gray-600'
          ]">
            {{ description }}
          </p>
          <div v-if="primaryButton || secondaryButton" class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink
                v-if="primaryButton"
                :to="primaryButton.to"
                class="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg text-center"
            >
              {{ primaryButton.text }}
            </NuxtLink>
            <NuxtLink
                v-if="secondaryButton"
                :to="secondaryButton.to"
                class="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-light transition-colors duration-200 text-center"
            >
              {{ secondaryButton.text }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right Content -->
        <div v-if="showImage" class="relative hidden md:flex items-center justify-end">
          <div class="relative w-full aspect-5/6 flex items-end justify-end overflow-hidden rounded-2xl">
            <img
                src="/sandro.jpeg"
                alt="De Elektraman"
                class="h-full w-full object-cover object-right drop-shadow-xl"
                style="-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%); mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
