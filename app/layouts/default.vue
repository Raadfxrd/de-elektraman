<template>
  <div class="bg-white min-h-screen flex flex-col text-gray-900">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script lang="ts" setup>
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import BackToTop from '~/components/BackToTop.vue'
</script>