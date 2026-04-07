<template>
  <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <nav class="container mx-auto flex items-center justify-between py-5 px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group">
        <img
            src="/logo.png"
            :alt="`${companyInfo.appName} Logo`"
            class="w-12 h-12 object-contain"
        >
        <span
            class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 tracking-tight">{{
            companyInfo.appName
          }}</span>
      </NuxtLink>

      <!-- Desktop Navigation Links -->
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

      <!-- Desktop CTA Button -->
      <NuxtLink
          to="/contact"
          class="hidden md:inline-block px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm"
      >
        Offerte aanvragen
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 text-gray-700 hover:text-primary transition-colors duration-200"
          :aria-label="mobileMenuOpen ? 'Sluit menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
      >
        <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-gray-100 bg-white"
      >
        <ul class="container mx-auto px-6 py-4 space-y-4">
          <li>
            <NuxtLink
                to="/"
                @click="mobileMenuOpen = false"
                class="block py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/services"
                @click="mobileMenuOpen = false"
                class="block py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Diensten
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/portfolio"
                @click="mobileMenuOpen = false"
                class="block py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Portfolio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/contact"
                @click="mobileMenuOpen = false"
                class="block py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Contact
            </NuxtLink>
          </li>
          <li class="pt-2">
            <NuxtLink
                to="/contact"
                @click="mobileMenuOpen = false"
                class="block w-full px-6 py-3 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-sm"
            >
              Offerte aanvragen
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const companyInfo = useCompanyInfo()
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>