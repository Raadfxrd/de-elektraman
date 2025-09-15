<template>
  <header>
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo / Brand -->
      <NuxtLink to="/" class="text-2xl font-bold tracking-tight hover:text-highlight transition-colors">
        De Elektraman ⚡
      </NuxtLink>

      <!-- Navigation -->
      <ul class="flex gap-6 font-medium">
        <li>
          <NuxtLink to="/" class="hover:text-highlight transition-colors">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/services" class="hover:text-highlight transition-colors">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio" class="hover:text-highlight transition-colors">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/offer" class="hover:text-highlight transition-colors">Offers</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-highlight transition-colors">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>