<template>
  <section
      class="relative flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white"
      style="min-height: calc(100vh - 10rem)"
  >
    <div
        class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      <!-- Left Content -->
      <div class="flex-1 text-center md:text-left">
        <h1
            class="text-4xl md:text-6xl font-bold leading-tight tracking-tight font-display"
        >
          Betrouwbare Elektricien. Voor al uw projecten ⚡
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-100 max-w-xl mx-auto md:mx-0">
          De Elektraman staat klaar voor installaties, onderhoud en advies.
          Snel, professioneel en altijd met een glimlach.
        </p>

        <!-- CTA Buttons -->
        <div
            class="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <NuxtLink
              to="/contact"
              class="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Neem Contact Op
          </NuxtLink>
          <NuxtLink
              to="/services"
              class="px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow hover:bg-secondary/90 transition"
          >
            Bekijk Diensten
          </NuxtLink>
        </div>
      </div>

      <!-- Right Image -->
      <div class="flex justify-center">
        <img
            src="../assets/img/logo.png"
            alt="Elektricien aan het werk"
            class="w-full max-w-md mx-auto drop-shadow-lg rounded-xl"
        />
      </div>
    </div>

    <!-- Subtle background lightning icon -->
    <div
        class="absolute top-10 right-10 text-white/20 text-9xl pointer-events-none select-none"
    >
      ⚡
    </div>
  </section>
</template>

<script setup lang="ts">
</script>