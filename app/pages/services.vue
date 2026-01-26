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
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Onze kernservices"
            description="Alles wat u nodig heeft voor betrouwbare elektrische systemen"
        />

        <div class="grid md:grid-cols-3 gap-8">
          <ServiceCard
              :icon="BoltIcon"
              title="Installaties"
              description="Professionele installatie van elektrische systemen, verlichting, bedrading en moderne smart home-oplossingen."
              :features="['Nieuwbouw en renovaties', 'Smart home integratie', 'Zonne-energie systemen']"
          />

          <ServiceCard
              :icon="WrenchScrewdriverIcon"
              title="Onderhoud & Inspectie"
              description="Regelmatig onderhoud, veiligheidscontroles en preventieve diensten om uw systemen soepel te laten werken."
              :features="['Periodieke controles', 'Veiligheidscertificering', 'Preventief onderhoud']"
          />

          <ServiceCard
              :icon="ExclamationTriangleIcon"
              title="Spoedreparaties"
              description="24/7 spoedeisende respons voor dringende elektrische problemen. We zijn er altijd voor u wanneer u ons nodig hebt."
              :features="['24/7 beschikbaarheid', 'Snelle responstijd', 'Noodreparaties']"
          />
        </div>
      </div>
    </section>

    <!-- Specialized Services -->
    <section class="bg-primary-light py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Gespecialiseerde diensten"
            description="Voor verschillende soorten projecten en ruimtes"
        />

        <div class="grid md:grid-cols-3 gap-8">
          <SpecializedServiceCard
              :icon="HomeIcon"
              title="Residentieel"
              description="Huizen en appartementen voorzien van veilige, moderne elektrische systemen."
              :features="['Huisbedrading', 'Verlichting design', 'Huisautomatisering', 'EV laadstations']"
          />

          <SpecializedServiceCard
              :icon="BuildingOfficeIcon"
              title="Commercieel"
              description="Kantoren en winkels met betrouwbare en efficiënte elektriciteit."
              :features="['Bedrijfsbedrading', 'LED verlichting', 'Noodstroomaggregaten', 'Beveiligingssystemen']"
          />

          <SpecializedServiceCard
              :icon="CogIcon"
              title="Industrieel"
              description="Fabricages en grote faciliteiten met geavanceerde elektrische oplossingen."
              :features="['Motorkrachten', 'Schakelkasten', 'Automatisering', '3-fase systemen']"
          />
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <SectionHeader
            title="Meer diensten"
        />

        <div class="grid md:grid-cols-3 gap-6 mx-auto">
          <SmallServiceCard
              :icon="SparklesIcon"
              title="Stekkercontacten & Schakelaars"
              description="Veilige installatie en vervanging van alle types."
          />

          <SmallServiceCard
              :icon="SparklesIcon"
              title="Verlichting & Lampinstallatie"
              description="Van standaard tot decoratieve verlichtingoplossingen."
          />

          <SmallServiceCard
              :icon="SparklesIcon"
              title="Aardingsonderzoeken"
              description="Veiligheidstesten en certificering."
          />

          <SmallServiceCard
              :icon="SparklesIcon"
              title="Apparaatinstallatie"
              description="Veilige aansluiting van grote huishoudapparaten."
          />

          <SmallServiceCard
              :icon="SparklesIcon"
              title="Beveiligingssystemen"
              description="CCTV en beveiligingsinstallatie."
          />

          <SmallServiceCard
              :icon="SparklesIcon"
              title="Testingen & Diagnostiek"
              description="Grondige systeemanalyse en probleemoplossing."
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
