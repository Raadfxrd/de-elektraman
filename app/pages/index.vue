<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-screen"
    style="min-height: calc(100vh - 4rem)"
  >
    <!-- Background Logo -->
    <img
      src="../assets/img/logo.png"
      alt="Elektricien aan het werk"
      class="absolute inset-0 m-auto w-[60vw] opacity-30 pointer-events-none select-none"
      style="z-index:0;"
    />

    <!-- Foreground Content -->
    <div class="relative z-10 flex flex-col items-center">
      <h1 class="text-5xl font-bold mb-4 text-center font-display">
        Betrouwbare Elektricien voor al uw projecten ⚡
      </h1>
      <p class="text-lg text-gray-100 mb-8 text-center max-w-md">
        De Elektraman staat klaar voor installaties, onderhoud en advies.<br>
        Snel, professioneel en altijd met een glimlach.
      </p>
      <NuxtLink
        to="/contact"
        class="px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Neem Contact Op
      </NuxtLink>
    </div>
  </section>
</template>