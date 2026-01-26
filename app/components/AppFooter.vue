<template>
  <footer class="bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
        <!-- Brand -->
        <div class="sm:col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-3 md:mb-4">
            <img
                src="/logo.png"
                :alt="`${companyInfo.appName} Logo`"
                class="w-10 h-10 md:w-12 md:h-12 object-contain"
            >
            <span class="text-base md:text-lg font-bold text-gray-900">{{ companyInfo.appName }}</span>
          </div>
          <p class="text-gray-600 text-xs md:text-sm">{{ companyInfo.description }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Snelle Links</h4>
          <ul class="space-y-2 text-xs md:text-sm">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-primary transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-600 hover:text-primary transition-colors">Diensten</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-gray-600 hover:text-primary transition-colors">Portfolio
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
          <ul class="space-y-2 text-xs md:text-sm text-gray-600">
            <li>E-mail: <a :href="`mailto:${companyInfo.email}`"
                           class="hover:text-primary transition-colors break-all">{{ companyInfo.email }}</a>
            </li>
            <li>Telefoon: <a :href="`tel:${companyInfo.phone}`"
                             class="hover:text-primary transition-colors">{{ companyInfo.phoneDisplay }}</a></li>
            <li>Altijd beschikbaar voor spoedeisende gevallen</li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Rechtmatig</h4>
          <ul class="space-y-2 text-xs md:text-sm">
            <li>
              <NuxtLink to="/privacy" class="text-gray-600 hover:text-primary transition-colors">Privacybeleid
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-gray-600 hover:text-primary transition-colors">Servicevoorwaarden
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
          class="border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 gap-4">
        <p class="text-center md:text-left">© {{ currentYear }} {{ companyInfo.appName }} — Alle rechten
          voorbehouden.</p>
        <div class="flex gap-4 md:gap-6">
          <a :href="companyInfo.social.linkedin" class="hover:text-primary transition-colors">LinkedIn</a>
          <a :href="companyInfo.social.facebook" class="hover:text-primary transition-colors">Facebook</a>
          <a :href="companyInfo.social.instagram" class="hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const companyInfo = useCompanyInfo()
</script>