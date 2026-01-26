<script setup lang="ts">
import type {Component} from 'vue'

interface Props {
  icon: Component
  title: string
  subtitle: string
  contactText: string
  contactLink: string
  description: string
  available?: boolean
  isEmergency?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  available: true,
  isEmergency: false
})

const {isOpen, isEmergencyAvailable, nextOpeningTime} = useBusinessHours()

// Determine if this contact method is currently available
const isAvailable = computed(() => {
  if (props.isEmergency) {
    return isEmergencyAvailable.value
  }
  return isOpen.value
})

const availabilityText = computed(() => {
  if (props.isEmergency) {
    return isEmergencyAvailable.value ? 'Altijd bereikbaar' : 'Noodlijn'
  }
  return isOpen.value ? 'Nu beschikbaar' : `Beschikbaar ${nextOpeningTime.value}`
})
</script>

<template>
  <div
      class="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center">
    <div class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6 mx-auto">
      <component :is="icon" class="w-8 h-8 text-primary"/>
    </div>

    <h3 class="text-2xl font-bold mb-3 text-secondary">{{ title }}</h3>

    <p class="leading-relaxed text-gray-600 mb-4 text-sm">
      {{ subtitle }}
    </p>

    <a
        :href="contactLink"
        class="block text-lg font-semibold text-primary hover:text-primary-dark transition-colors mb-2"
    >
      {{ contactText }}
    </a>

    <p class="text-sm text-gray-600 mb-4">
      {{ description }}
    </p>

    <div class="mt-4 pt-4 border-t border-gray-100">
      <span
          v-if="isAvailable"
          class="inline-flex items-center gap-1 text-xs font-semibold text-primary"
      >
        <span class="w-2 h-2 bg-primary rounded-full animate-pulse"/>
        {{ availabilityText }}
      </span>
      <span
          v-else
          class="inline-flex items-center gap-1 text-xs font-semibold text-gray-500"
      >
        <span class="w-2 h-2 bg-gray-400 rounded-full"/>
        {{ availabilityText }}
      </span>
    </div>
  </div>
</template>
