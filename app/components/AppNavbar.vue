<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between py-5 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <img
            src="/logo.png"
            :alt="`${companyInfo.appName} Logo`"
            class="w-12 h-12 object-contain"
        >
        <span class="text-xl font-bold text-gray-900 hover:text-primary transition-colors duration-200 tracking-tight">{{
            companyInfo.appName
          }}</span>
      </NuxtLink>

      <!-- Navigation Links -->
      <ul class="hidden md:flex gap-8 font-medium text-gray-700">
        <li>
          <NuxtLink to="/" class="relative hover:text-primary transition-colors duration-200 group">
            Home
            <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"/>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services" class="relative hover:text-primary transition-colors duration-200 group">
            Diensten
            <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"/>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio" class="relative hover:text-primary transition-colors duration-200 group">
            Portfolio
            <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"/>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="relative hover:text-primary transition-colors duration-200 group">
            Contact
            <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-200"/>
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Button -->
      <NuxtLink
          to="/contact"
          class="hidden md:inline-block px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm"
      >
        Offerte anvragen
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const companyInfo = useCompanyInfo()
</script>