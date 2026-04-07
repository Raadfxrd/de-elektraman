<script setup lang="ts">
import {BoltIcon, ExclamationTriangleIcon, WrenchScrewdriverIcon} from '@heroicons/vue/24/solid'

const companyInfo = useCompanyInfo()
</script>
<template>
  <div>
    <!-- Hero Section -->
    <PageHero
        title="Professionele elektrische diensten die u kunt"
        highlight-text="Vertrouwen"
        description="Van installaties en onderhoud tot spoedeisende reparaties, De Elektraman levert deskundige elektrische diensten met precisie, betrouwbaarheid en professionaliteit."
        :show-image="true"
        :primary-button="{ text: 'Vandaag aan de slag', to: '/contact' }"
        :secondary-button="{ text: 'Bekijk ons werk', to: '/portfolio' }"
    />

    <!-- Trust Indicators -->
    <section class="bg-gray-50 py-12 md:py-16 px-6">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2 text-primary">{{ companyInfo.happyClients }}+</div>
            <p class="text-sm md:text-base text-gray-700">Tevreden Klanten</p>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2 text-primary">{{ companyInfo.yearsExperience }}+</div>
            <p class="text-sm md:text-base text-gray-700">Jaar Ervaring</p>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2 text-primary">{{ companyInfo.hours.emergency }}</div>
            <p class="text-sm md:text-base text-gray-700">Storingsdienst</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-12 md:py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Onze diensten"
            description="Volledige elektrische oplossingen afgestemd op uw residentiële, commerciële of industriële behoeften"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
              :icon="BoltIcon"
              title="Installaties"
              description="Professionele installatie van elektrische systemen, verlichting, bedrading en moderne smart home-oplossingen."
          />

          <ServiceCard
              :icon="WrenchScrewdriverIcon"
              title="Onderhoud"
              description="Regelmatig onderhoud, veiligheidscontroles en preventieve diensten om uw systemen soepel te laten werken."
          />

          <ServiceCard
              :icon="ExclamationTriangleIcon"
              title="Storingsdienst"
              description="24/7 Storingsdienst voor dringende elektrische problemen. We zijn er altijd voor u wanneer u ons nodig hebt."
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-12 md:py-20 px-6">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary">Waarom De Elektraman kiezen?</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-700">
            We combineren jarenlange ervaring met moderne technieken om uitzonderlijke elektrische diensten te leveren
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <FeatureItem
              title="Erkend & verzekerd"
              description="Al onze elektriciens zijn volledig erkend, gecertificeerd en verzekerd voor uw gemoedsrust."
          />

          <FeatureItem
              title="Snelle responstijd"
              description="We arriveren snel om uw elektrische problemen efficiënt in te schatten en op te lossen."
          />

          <FeatureItem
              title="Transparante prijsstelling"
              description="Geen verborgen kosten. We geven van tevoren gedetailleerde offertes zodat u precies weet wat te verwachten."
          />

          <FeatureItem
              title="Sterke basis opgebouwd"
              description="Groeiend netwerk van tevreden klanten in residentiële en commerciële projecten."
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CallToAction
        title="Klaar om te beginnen?"
        description="Neem vandaag contact op met De Elektraman voor een gratis adviesgesprek en ontdek waarom bedrijven en huiseigenaren ons vertrouwen."
        button-text="Offerte aanvragen"
        button-link="/contact"
        :dark-mode="true"
    />
  </div>
</template>
