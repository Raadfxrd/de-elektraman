<template>
  <Transition name="fade">
    <button
        v-if="showButton"
        class="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white cursor-pointer rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 overflow-hidden"
        aria-label="Terug naar boven"
        title="Terug naar boven"
        @click="scrollToTop"
    >
      <ArrowUpIcon class="h-6 w-6 arrow-up-icon"/>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import {ArrowUpIcon} from '@heroicons/vue/24/solid'
import {onBeforeUnmount, onMounted, ref} from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Arrow up animation */
.arrow-up-icon {
  display: block;
  animation-fill-mode: forwards;
}

button:hover .arrow-up-icon {
  animation: arrowSlideUp 0.5s ease;
}

@keyframes arrowSlideUp {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  49% {
    transform: translateY(-150%);
    opacity: 0;
  }
  50% {
    transform: translateY(150%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
