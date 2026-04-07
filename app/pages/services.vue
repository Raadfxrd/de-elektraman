<script setup lang="ts">
import {
  BoltIcon,
  BuildingOfficeIcon,
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
    <PageHero
        title="Volledige elektrische"
        highlight-text="Diensten"
        description="Van residentiële tot industriële projecten, De Elektraman biedt professionele en betrouwbare elektrische diensten."
        :compact="true"
    />

    <!-- Primary Services -->
    <section class="py-12 md:py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Onze kernservices"
            description="Alles wat u nodig heeft voor betrouwbare elektrische systemen"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
              :icon="BoltIcon"
              title="Installaties"
              description="Professionele installatie van elektrische systemen, verlichting, bedrading en moderne smart home-oplossingen."
              :features="['Nieuwbouw en renovaties', 'Zonne-energie systemen', 'Batterij-opslag systemen', 'Laadpalen']"
          />

          <ServiceCard
              :icon="WrenchScrewdriverIcon"
              title="Onderhoud & Inspectie"
              description="Regelmatig onderhoud, veiligheidscontroles en preventieve diensten om uw systemen soepel te laten werken."
              :features="['Periodieke controles', 'Veiligheidscertificering', 'Periodieke controle NEN1010 scope 8', 'Veiligheid woning inspectie NEN8025']"
          />

          <ServiceCard
              :icon="ExclamationTriangleIcon"
              title="Storingsdienst"
              description="24/7 Storingsdienst voor dringende elektrische problemen. We zijn er altijd voor u wanneer u ons nodig hebt."
              :features="['24/7 beschikbaarheid', 'Snelle responstijd', 'Noodreparaties']"
          />
        </div>
      </div>
    </section>

    <!-- Specialized Services -->
    <section class="bg-primary-light py-12 md:py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Gespecialiseerde diensten"
            description="Voor verschillende soorten projecten en ruimtes"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <SpecializedServiceCard
              :icon="HomeIcon"
              title="Residentieel"
              description="Huizen en appartementen voorzien van veilige, moderne elektrische systemen."
              :features="['Elektra renovatie/aanleggen', 'Verlichting design', 'Huisautomatisering', 'EV laadstations 3,7kW tot 22kW', 'Energie opslag systeem 5.1 kWh tot 40.8 kWh', 'Zonne-energie systeem', 'Groepenkast vervangen', '1 Fase naar 3 fase', 'Aardpen slaan']"
          />

          <SpecializedServiceCard
              :icon="BuildingOfficeIcon"
              title="Commercieel"
              description="Kantoren en winkels met betrouwbare en efficiënte elektriciteit."
              :features="['Elektra renovatie/aanleggen', 'LED verlichting', 'Noodstroom voorziening', 'AC & DC EV laadstation 22 kW tot 720kW', 'Energie opslag 40.8kWh tot 512kWh', 'Aardpen slaan', 'Capaciteit vergroting (Netcongestie)', 'Verdeel inrichting']"
          />
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <ProcessSection
        title="Hoe wij werken"
        description="Ons transparante en efficiënte proces"
        :steps="[
          { number: 1, title: 'Contact', description: 'Neem contact op via telefoon of formulier' },
          { number: 2, title: 'Beoordeling', description: 'We beoordelen uw behoeften' },
          { number: 3, title: 'Offerte', description: 'Ontvang een duidelijke offerte' },
          { number: 4, title: 'Uitvoering', description: 'We voeren het werk professioneel uit' }
        ]"
    />

    <!-- CTA Section -->
    <CallToAction
        title="Interesse in onze diensten?"
        description="Neem vandaag contact op voor een gratis adviesgesprek en ontdek hoe wij u kunnen helpen."
        button-text="Vraag een offerte aan"
        button-link="/contact"
    />
  </div>
</template>
