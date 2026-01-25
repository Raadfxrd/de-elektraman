<script setup lang="ts">
import {BoltIcon, CheckIcon, ExclamationTriangleIcon, WrenchScrewdriverIcon} from '@heroicons/vue/24/solid'
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 md:py-32 px-6">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight text-secondary">
              Professionele Elektrische Diensten die U Kunt <span class="text-primary">Vertrouwen</span>
            </h1>
            <p class="text-xl leading-relaxed text-gray-600">
              Van installaties en onderhoud tot spoedeisende reparaties, De Elektraman levert deskundige elektrische
              diensten met precisie, betrouwbaarheid en professionaliteit.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <NuxtLink
                  to="/contact"
                  class="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg text-center"
              >
                Vandaag aan de slag
              </NuxtLink>
              <NuxtLink
                  to="/portfolio"
                  class="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-light transition-colors duration-200 text-center"
              >
                Bekijk ons werk
              </NuxtLink>
            </div>
          </div>

          <!-- Right Content -->
          <div class="relative hidden md:block">
            <div
                class="w-full aspect-square rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                  src="/logo.png"
                  alt="De Elektraman Logo"
                  class="w-90% h-90% object-contain"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="bg-gray-50 py-16 px-6">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold mb-2 text-primary">50+</div>
            <p class="text-gray-700">Tevreden Klanten</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2 text-primary">2+</div>
            <p class="text-gray-700">Jaar Ervaring</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold mb-2 text-primary">24/7</div>
            <p class="text-gray-700">Spoedeisende Dienst</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">Onze Diensten</h2>
          <p class="text-xl max-w-2xl mx-auto text-gray-600">
            Volledige elektrische oplossingen afgestemd op uw residentiële, commerciële of industriële behoeften
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
              class="p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center text-2xl mb-4">
              <BoltIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Installaties</h3>
            <p class="leading-relaxed text-gray-600">
              Professionele installatie van elektrische systemen, verlichting, bedrading en moderne smart
              home-oplossingen.
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
              class="p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center text-2xl mb-4">
              <WrenchScrewdriverIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Onderhoud</h3>
            <p class="leading-relaxed text-gray-600">
              Regelmatig onderhoud, veiligheidscontroles en preventieve diensten om uw systemen soepel te laten werken.
            </p>
          </div>

          <!-- Service Card 3 -->
          <div
              class="p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center text-2xl mb-4">
              <ExclamationTriangleIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Spoedreparaties</h3>
            <p class="leading-relaxed text-gray-600">
              24/7 spoedeisende respons voor dringende elektrische problemen. We zijn er altijd voor u wanneer u ons
              nodig hebt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">Waarom De Elektraman Kiezen?</h2>
          <p class="text-xl text-gray-700">
            We combineren jarenlange ervaring met moderne technieken om uitzonderlijke elektrische diensten te leveren
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex gap-4">
            <div
                class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              <CheckIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-2 text-secondary">Erkend & Verzekerd</h4>
              <p class="text-gray-600">Al onze elektriciens zijn volledig erkend, gecertificeerd en verzekerd voor uw
                gemoedsrust.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
                class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              <CheckIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-2 text-secondary">Snelle Responstijd</h4>
              <p class="text-gray-600">We arriveren snel om uw elektrische problemen efficiënt in te schatten en
                op te lossen.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
                class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              <CheckIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-2 text-secondary">Transparante Prijsstelling</h4>
              <p class="text-gray-600">Geen verborgen kosten. We geven van tevoren gedetailleerde offertes zodat u
                precies weet wat te verwachten.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div
                class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              <CheckIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-2 text-secondary">Sterke Basis Opgebouwd</h4>
              <p class="text-gray-600">Groeiend netwerk van tevreden klanten in residentiële en commerciële
                projecten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 py-16 px-6">
      <div class="container mx-auto text-center text-white">
        <h2 class="text-4xl font-bold mb-4">Klaar om te Beginnen?</h2>
        <p class="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Neem vandaag contact op met De Elektraman voor een gratis adviesgesprek en ontdek waarom bedrijven en
          huiseigenaren ons vertrouwen.
        </p>
        <NuxtLink
            to="/contact"
            class="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200"
        >
          Offerte Aanvragen
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
