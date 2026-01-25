<script setup lang="ts">
import {
  BoltIcon,
  BuildingOfficeIcon,
  CheckIcon,
  CogIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  SparklesIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/solid'
</script>
<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 md:py-24 px-6">
      <div class="container mx-auto">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold leading-tight text-secondary mb-6">
            Volledige Elektrische <span class="text-primary">Diensten</span>
          </h1>
          <p class="text-xl leading-relaxed text-gray-600">
            Van residentiële tot industriële projecten, De Elektraman biedt professionele en betrouwbare elektrische
            diensten.
          </p>
        </div>
      </div>
    </section>

    <!-- Primary Services -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">Onze Kernservices</h2>
          <p class="text-xl max-w-2xl mx-auto text-gray-600">
            Alles wat u nodig heeft voor betrouwbare elektrische systemen
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
              class="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div
                class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
              <BoltIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Installaties</h3>
            <p class="leading-relaxed text-gray-600 mb-4">
              Professionele installatie van elektrische systemen, verlichting, bedrading en moderne smart
              home-oplossingen.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Nieuwbouw en renovaties</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Smart home integratie</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Zonne-energie systemen</span>
              </li>
            </ul>
          </div>

          <!-- Service Card 2 -->
          <div
              class="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div
                class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
              <WrenchScrewdriverIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Onderhoud & Inspectie</h3>
            <p class="leading-relaxed text-gray-600 mb-4">
              Regelmatig onderhoud, veiligheidscontroles en preventieve diensten om uw systemen soepel te laten werken.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Periodieke controles</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Veiligheidscertificering</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Preventief onderhoud</span>
              </li>
            </ul>
          </div>

          <!-- Service Card 3 -->
          <div
              class="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div
                class="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-6">
              <ExclamationTriangleIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Spoedreparaties</h3>
            <p class="leading-relaxed text-gray-600 mb-4">
              24/7 spoedeisende respons voor dringende elektrische problemen. We zijn er altijd voor u wanneer u ons
              nodig hebt.
            </p>
            <ul class="space-y-2 text-gray-600">
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>24/7 beschikbaarheid</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Snelle responstijd</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckIcon class="w-4 h-4 text-primary"/>
                <span>Noodreparaties</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Services -->
    <section class="bg-gray-50 py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">Gespecialiseerde Diensten</h2>
          <p class="text-xl max-w-2xl mx-auto text-gray-600">
            Voor verschillende soorten projecten en ruimtes
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Residential -->
          <div
              class="p-8 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6 mx-auto">
              <HomeIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary text-center">Residentieel</h3>
            <p class="leading-relaxed text-gray-600 text-center mb-6">
              Huizen en appartementen voorzien van veilige, moderne elektrische systemen.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Huisbedrading</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Verlichting design</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Huisautomatisering</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>EV laadstations</span>
              </li>
            </ul>
          </div>

          <!-- Commercial -->
          <div
              class="p-8 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6 mx-auto">
              <BuildingOfficeIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary text-center">Commercieel</h3>
            <p class="leading-relaxed text-gray-600 text-center mb-6">
              Kantoren en winkels met betrouwbare en efficiënte elektriciteit.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Bedrijfsbedrading</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>LED verlichting</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Noodstroomaggregaten</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Beveiligingssystemen</span>
              </li>
            </ul>
          </div>

          <!-- Industrial -->
          <div
              class="p-8 rounded-xl bg-white border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center mb-6 mx-auto">
              <CogIcon class="w-8 h-8 text-primary"/>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-secondary text-center">Industrieel</h3>
            <p class="leading-relaxed text-gray-600 text-center mb-6">
              Fabricages en grote faciliteiten met geavanceerde elektrische oplossingen.
            </p>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Motorkrachten</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Schakelkasten</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>Automatisering</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckIcon class="w-4 h-4 text-primary shrink-0 mt-0.5"/>
                <span>3-fase systemen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-secondary">Meer Diensten</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Stekkercontacten & Schakelaars</h4>
              <p class="text-gray-600 text-sm">Veilige installatie en vervanging van alle types.</p>
            </div>
          </div>

          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Verlichting & Lampinstallatie</h4>
              <p class="text-gray-600 text-sm">Van standaard tot decoratieve verlichtingoplossingen.</p>
            </div>
          </div>

          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Aardingsonderzoeken</h4>
              <p class="text-gray-600 text-sm">Veiligheidstesten en certificering.</p>
            </div>
          </div>

          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Apparaatinstallatie</h4>
              <p class="text-gray-600 text-sm">Veilige aansluiting van grote huishoudapparaten.</p>
            </div>
          </div>

          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Beveiligingssystemen</h4>
              <p class="text-gray-600 text-sm">CCTV en beveiligingsinstallatie.</p>
            </div>
          </div>

          <div
              class="flex gap-4 p-6 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <div class="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
              <SparklesIcon class="w-5 h-5"/>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-1 text-secondary">Testingen & Diagnostiek</h4>
              <p class="text-gray-600 text-sm">Grondige systeemanalyse en probleemoplossing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="bg-gray-900 text-white py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Hoe Wij Werken</h2>
          <p class="text-xl opacity-95">
            Ons transparante en efficiënte proces
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div
                class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h4 class="text-lg font-bold mb-2">Contact</h4>
            <p class="text-gray-300 text-sm">Neem contact op via telefoon of formulier</p>
          </div>

          <div class="text-center">
            <div
                class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h4 class="text-lg font-bold mb-2">Beoordeling</h4>
            <p class="text-gray-300 text-sm">We beoordelen uw behoeften</p>
          </div>

          <div class="text-center">
            <div
                class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h4 class="text-lg font-bold mb-2">Offerte</h4>
            <p class="text-gray-300 text-sm">Ontvang een duidelijke offerte</p>
          </div>

          <div class="text-center">
            <div
                class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h4 class="text-lg font-bold mb-2">Uitvoering</h4>
            <p class="text-gray-300 text-sm">We voeren het werk professioneel uit</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Interesse in Onze Diensten?
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Neem vandaag contact op voor een gratis adviesgesprek en ontdek hoe wij u kunnen helpen.
          </p>
          <NuxtLink
              to="/contact"
              class="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow-lg"
          >
            Vraag een Offerte Aan
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
