<template>
  <div class="bg-main-gradient min-h-screen flex flex-col text-gray-100 dark:text-gray-900">
    <AppNavbar />
    <main>
      <slot/>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from "~/components/AppNavbar.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>