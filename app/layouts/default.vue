<template>
  <div class="min-h-screen flex flex-col bg-background text-gray-900 dark:text-gray-100">
    <!-- Header -->
    <header class="shadow bg-primary text-white">
      <nav class="container mx-auto flex items-center justify-between py-4 px-6">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="text-2xl font-bold tracking-tight hover:text-accent transition-colors">
          De Elektraman ⚡
        </NuxtLink>

        <!-- Navigation -->
        <ul class="flex gap-6 font-medium">
          <li>
            <NuxtLink to="/" class="hover:text-accent transition-colors">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services" class="hover:text-accent transition-colors">Services</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio" class="hover:text-accent transition-colors">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/offer" class="hover:text-accent transition-colors">Offers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-accent transition-colors">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main content -->
    <main>
      <slot/>
    </main>

    <!-- Footer -->
    <footer class="bg-secondary text-white py-6">
      <div class="container mx-auto text-center text-sm">
        <p>© {{ new Date().getFullYear() }} De Elektraman — All rights reserved.</p>
        <p class="mt-2">
          <NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
          •
          <NuxtLink to="/terms" class="hover:underline">Terms</NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>