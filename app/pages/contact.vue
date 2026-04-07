<script setup lang="ts">
import {BoltIcon, CheckBadgeIcon, ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/vue/24/solid'
import {nextTick, onMounted, ref, watch} from 'vue'

const companyInfo = useCompanyInfo()
const route = useRoute()
const nameInput = ref<HTMLInputElement | null>(null)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  serviceType: 'Algemene Vraag'
})

const serviceTypes = [
  'Algemene Vraag',
  'Residentiële Installatie',
  'Commercieel Project',
  'Onderhoud & Inspectie',
  'Storingsdienst',
  'Offerte Aanvraag'
]

const mapCategoryToServiceType = (categoryValue: string | null | Array<string | null> | undefined) => {
  const rawValue = Array.isArray(categoryValue) ? categoryValue[0] : categoryValue
  if (!rawValue) return null

  const normalized = rawValue.trim().toLowerCase()
  const categoryMap: Record<string, string> = {
    residentieel: 'Residentiële installatie',
    commercieel: 'Commercieel project',
    onderhoud: 'Onderhoud of inspectie',
  }

  return categoryMap[normalized] ?? null
}

const applyRouteFormState = async () => {
  const mappedServiceType = mapCategoryToServiceType(route.query.category)
  if (mappedServiceType) {
    formData.value.serviceType = mappedServiceType
  }

  if (route.hash === '#contact-form' || mappedServiceType) {
    await nextTick()
    nameInput.value?.focus()
  }
}

onMounted(() => {
  void applyRouteFormState()
})

watch(() => [route.hash, route.query.category], () => {
  void applyRouteFormState()
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <PageHero
        title="Laten we uw project"
        highlight-text="Bespreken"
        description="Onze experts staan klaar om uw vragen te beantwoorden en een gratis offerte op te stellen."
    />

    <!-- Contact Methods - Cards -->
    <section class="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ContactCard
              :icon="PhoneIcon"
              title="Bel ons direct"
              subtitle="Praat met een expert"
              :contact-text="companyInfo.phoneDisplay"
              :contact-link="`tel:${companyInfo.phone}`"
              :description="`Ma - Vr: ${companyInfo.hours.weekdays}`"
          />

          <ContactCard
              :icon="EnvelopeIcon"
              title="Stuur een e-mail"
              subtitle="We reageren snel"
              :contact-text="companyInfo.email"
              :contact-link="`mailto:${companyInfo.email}`"
              :description="`Ma - Vr: ${companyInfo.hours.weekdays}`"
          />

          <ContactCard
              :icon="ClockIcon"
              title="24/7 Noodhulp"
              subtitle="Altijd bereikbaar"
              :contact-text="companyInfo.emergencyPhoneDisplay"
              :contact-link="`tel:${companyInfo.emergencyPhone}`"
              description="Voor spoedeisende situaties"
              :is-emergency="true"
          />
        </div>
      </div>
    </section>

    <!-- Main Content - Form & Info -->
    <section class="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div class="container mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

          <!-- Left - Contact Form -->
          <div id="contact-form"
               class="bg-gray-50 rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-12 border border-border scroll-mt-28 md:scroll-mt-32">
            <div class="mb-6 md:mb-8">
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3">Stuur een bericht</h2>
              <p class="text-gray-700 text-base md:text-lg">
                Vul onderstaand formulier in of bel ons direct. We nemen zo snel mogelijk contact met u op.
              </p>
            </div>

            <form class="space-y-5 md:space-y-6" @submit.prevent="() => {}">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-bold text-gray-800 mb-2">
                  Volledige naam *
                </label>
                <input
                    id="name"
                    ref="nameInput"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base md:text-lg bg-white"
                    placeholder="Jan de Vries"
                >
              </div>

              <!-- Email & Phone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label for="email" class="block text-sm font-bold text-gray-800 mb-2">
                    E-mailadres *
                  </label>
                  <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base md:text-lg bg-white"
                      placeholder="jan@voorbeeld.nl"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm font-bold text-gray-800 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base md:text-lg bg-white"
                      placeholder="06 1234 5678"
                  >
                </div>
              </div>

              <!-- Service Type -->
              <div>
                <label for="serviceType" class="block text-sm font-bold text-gray-800 mb-2">
                  Type dienst *
                </label>
                <select
                    id="serviceType"
                    v-model="formData.serviceType"
                    required
                    class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-base md:text-lg"
                >
                  <option v-for="type in serviceTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-bold text-gray-800 mb-2">
                  Onderwerp *
                </label>
                <input
                    id="subject"
                    v-model="formData.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-base md:text-lg bg-white"
                    placeholder="Waar kunnen we u mee helpen?"
                >
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-bold text-gray-800 mb-2">
                  Uw bericht *
                </label>
                <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none text-base md:text-lg bg-white"
                    placeholder="Vertel ons meer over uw project, tijdlijn, budget en eventuele specifieke wensen..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                  type="submit"
                  class="w-full px-6 md:px-8 py-4 md:py-5 bg-primary text-white text-base md:text-lg font-bold rounded-xl cursor-pointer hover:bg-primary-dark hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Verstuur bericht</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>

              <p class="text-sm text-gray-600 text-center">
                Door dit formulier te verzenden, neemt u contact op via e-mail of telefoon.
              </p>
            </form>
          </div>

          <!-- Right - Why Choose Us & Additional Info -->
          <div class="space-y-6 md:space-y-8">

            <!-- Why Contact Us -->
            <div class="bg-primary rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-white shadow-lg">
              <h3 class="text-2xl md:text-3xl font-bold mb-6">Waarom De Elektraman?</h3>
              <div class="space-y-6">
                <div class="flex gap-4 text-white">
                  <div class="shrink-0">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <CheckBadgeIcon class="w-7 h-7 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold mb-2 text-white">Gecertificeerd & verzekerd</h4>
                    <p class="text-white/90">Alle werkzaamheden worden uitgevoerd volgens de hoogste
                      veiligheidsnormen.</p>
                  </div>
                </div>

                <div class="flex gap-4 text-white">
                  <div class="shrink-0">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <BoltIcon class="w-7 h-7 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold mb-2 text-white">Snelle service</h4>
                    <p class="text-white/90">Binnen 24 uur reactie en spoedservice voor noodgevallen beschikbaar.</p>
                  </div>
                </div>

                <div class="flex gap-4 text-white">
                  <div class="shrink-0">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                      <MapPinIcon class="w-7 h-7 text-white"/>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold mb-2 text-white">Landelijk actief</h4>
                    <p class="text-white/90">We bedienen klanten door heel Nederland met dezelfde hoge kwaliteit.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Emergency Card -->
            <div class="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border-2 border-red">
              <div class="flex items-center gap-2 mb-4">
                <span class="w-3 h-3 bg-red rounded-full animate-pulse"/>
                <span class="text-xs font-bold uppercase tracking-wider text-red">Noodgeval</span>
              </div>

              <h3 class="text-xl md:text-2xl font-bold mb-3 text-secondary">24/7 Storingsdienst</h3>

              <p class="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                Elektrische storing of noodsituatie? Bel direct onze spoedlijn voor onmiddellijke hulp.
              </p>

              <a
                  :href="`tel:${companyInfo.emergencyPhone}`"
                  class="inline-flex items-center justify-center gap-2 w-full px-4 md:px-6 py-3 md:py-4 bg-red text-white text-sm md:text-base font-bold rounded-xl hover:bg-red-dark transition-all shadow-md hover:shadow-lg"
              >
                <PhoneIcon class="w-5 h-5"/>
                <span>Bel Nu: {{ companyInfo.emergencyPhoneDisplay }}</span>
              </a>
            </div>

            <!-- Service Hours -->
            <div class="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-border">
              <h3 class="text-xl md:text-2xl font-bold text-secondary mb-6">Openingstijden</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="font-semibold text-gray-700">Maandag - Vrijdag</span>
                  <span class="text-gray-600">{{ companyInfo.hours.weekdays }}</span>
                </div>
                <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span class="font-semibold text-gray-700">Zaterdag - Zondag</span>
                  <span class="text-gray-600">{{ companyInfo.hours.weekend }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-red">Spoeddienst</span>
                  <span class="font-bold text-red">{{ companyInfo.hours.emergency }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div class="container mx-auto max-w-6xl">
        <SectionHeader
            title="Wat u kunt verwachten"
            description="Ons proces is transparant en efficiënt"
        />

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div class="text-center">
            <div
                class="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl md:text-3xl font-bold shadow-lg">
              1
            </div>
            <h4 class="text-base md:text-lg font-bold mb-2 text-secondary">Contact</h4>
            <p class="text-gray-600 text-xs md:text-sm">U neemt contact op via telefoon, e-mail of formulier</p>
          </div>

          <div class="text-center">
            <div
                class="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl md:text-3xl font-bold shadow-lg">
              2
            </div>
            <h4 class="text-base md:text-lg font-bold mb-2 text-secondary">Intake</h4>
            <p class="text-gray-600 text-xs md:text-sm">We bespreken uw wensen en plannen een afspraak</p>
          </div>

          <div class="text-center">
            <div
                class="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl md:text-3xl font-bold shadow-lg">
              3
            </div>
            <h4 class="text-base md:text-lg font-bold mb-2 text-secondary">Offerte</h4>
            <p class="text-gray-600 text-xs md:text-sm">U ontvangt een transparante en gedetailleerde offerte</p>
          </div>

          <div class="text-center">
            <div
                class="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl md:text-3xl font-bold shadow-lg">
              4
            </div>
            <h4 class="text-base md:text-lg font-bold mb-2 text-secondary">Uitvoering</h4>
            <p class="text-gray-600 text-xs md:text-sm">We starten met uw project op de afgesproken datum</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <CallToAction
        title="Laten we beginnen"
        description="Neem vandaag nog contact op en ontvang binnen 24 uur een vrijblijvende offerte."
        button-text="Bel direct"
        :button-link="`tel:${companyInfo.phone}`"
        :dark-mode="true"
    />
  </div>
</template>
