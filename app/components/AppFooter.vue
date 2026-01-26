<template>
  <footer class="bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-6 py-12">
      <!-- Footer Content -->
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img
                src="/logo.png"
                :alt="`${companyInfo.appName} Logo`"
                class="w-12 h-12 object-contain"
            >
            <span class="text-lg font-bold text-gray-900">{{ companyInfo.appName }}</span>
          </div>
          <p class="text-gray-600 text-sm">{{ companyInfo.description }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">Snelle Links</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-green-600 transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-600 hover:text-green-600 transition-colors">Diensten</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-gray-600 hover:text-green-600 transition-colors">Portfolio
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">Contact</h4>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>E-mail: <a :href="`mailto:${companyInfo.email}`"
                           class="hover:text-green-600 transition-colors">{{ companyInfo.email }}</a>
            </li>
            <li>Telefoon: <a :href="`tel:${companyInfo.phone}`"
                             class="hover:text-green-600 transition-colors">{{ companyInfo.phoneDisplay }}</a></li>
            <li>Altijd beschikbaar voor spoedeisende gevallen</li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="font-bold text-gray-900 mb-4">Rechtmatig</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/privacy" class="text-gray-600 hover:text-green-600 transition-colors">Privacybeleid
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-gray-600 hover:text-green-600 transition-colors">Servicevoorwaarden
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
          class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {{ currentYear }} {{ companyInfo.appName }} — Alle rechten voorbehouden.</p>
        <div class="mt-4 md:mt-0 flex gap-6">
          <a :href="companyInfo.social.linkedin" class="hover:text-green-600 transition-colors">LinkedIn</a>
          <a :href="companyInfo.social.facebook" class="hover:text-green-600 transition-colors">Facebook</a>
          <a :href="companyInfo.social.instagram" class="hover:text-green-600 transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const companyInfo = useCompanyInfo()
</script>