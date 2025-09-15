<template>
  <footer class="py-6">
    <div class="container mx-auto text-center text-sm">
      <p>© {{ currentYear }} De Elektraman — All rights reserved.</p>
      <p class="mt-2">
        <NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
        •
        <NuxtLink to="/terms" class="hover:underline">Terms</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>