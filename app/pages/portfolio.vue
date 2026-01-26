<script setup lang="ts">
import {computed, ref} from 'vue'
import {ChevronLeftIcon, ChevronRightIcon, SparklesIcon, XMarkIcon} from '@heroicons/vue/24/solid'

interface Project {
  id: number
  images: string[]
  title: string
  category: string
  description: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    images: ['/img-portfolio-1.jpeg', '/img-portfolio-5.jpeg', '/img-portfolio-9.jpeg'],
    title: 'Residentiële Installaties',
    category: 'Residentieel',
    description: 'Volledige elektrische installaties in moderne woonhuizen met slimme verlichting en huisautomatisering.'
  },
  {
    id: 2,
    images: ['/img-portfolio-6.jpeg', '/img-portfolio-10.jpeg'],
    title: 'Commerciële Installaties',
    category: 'Commercieel',
    description: 'Professionele bedrading, LED verlichting en beveiligingssystemen voor kantoorruimtes en winkels.'
  },
  {
    id: 3,
    images: ['/img-portfolio-3.jpeg', '/img-portfolio-11.jpeg', '/img-portfolio-13.jpeg'],
    title: 'Onderhoud & Inspectie',
    category: 'Onderhoud',
    description: 'Regelmatige veiligheidsinspectie, preventief onderhoud en aarding inspecties.'
  },
  {
    id: 4,
    images: ['/img-portfolio-4.jpeg', '/img-portfolio-12.jpeg', '/img-portfolio-16.jpeg'],
    title: 'Industriële Projecten',
    category: 'Industrieel',
    description: 'Geavanceerde schakelkasten, fabrieksinstallaties en distributiekasten voor industriële productie.'
  },
  {
    id: 5,
    images: ['/img-portfolio-7.jpeg', '/img-portfolio-15.jpeg', '/img-portfolio-19.jpeg'],
    title: 'Woning Modernisering',
    category: 'Residentieel',
    description: 'Zonne-energie installaties, woningupgrades en dakkapel elektriciteit.'
  },
  {
    id: 6,
    images: ['/img-portfolio-8.jpeg', '/img-portfolio-14.jpeg', '/img-portfolio-17.jpeg'],
    title: 'Commerciële Renovatie',
    category: 'Commercieel',
    description: 'Noodstroomvoeding, kantoorenrenovaties en installaties voor restaurants.'
  },
  {
    id: 7,
    images: ['/img-portfolio-18.jpeg', '/img-portfolio-20.jpeg', '/img-portfolio-23.jpeg'],
    title: 'Technische Diensten',
    category: 'Onderhoud',
    description: 'Motoraansluitingen, spoedeisende reparaties en diagnostiek met professionele testapparatuur.'
  },
  {
    id: 8,
    images: ['/img-portfolio-21.jpeg', '/img-portfolio-24.jpeg', '/img-portfolio-25.jpeg'],
    title: 'Geavanceerde Projecten',
    category: 'Residentieel',
    description: 'EV laadstations, nieuwbouwprojecten en warehouse verlichting systemen.'
  },
  {
    id: 9,
    images: ['/img-portfolio-22.jpeg', '/img-portfolio-26.jpeg', '/img-portfolio-27.jpeg'],
    title: 'Kritische Systemen',
    category: 'Commercieel',
    description: 'Installaties voor loodgietersbedrijven, ziekenhuizen en fitnesscentra.'
  },
])

const categories = ref(['Alles', 'Residentieel', 'Commercieel', 'Industrieel', 'Onderhoud'])
const selectedCategory = ref('Alles')
const selectedProject = ref<Project | null>(null)
const selectedProjectIndex = ref<number>(-1)
const selectedImageIndex = ref<number>(0)
const isProjectChanging = ref(false)
const isFilterChanging = ref(false)

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Alles') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})

const selectCategory = (category: string) => {
  if (category === selectedCategory.value) return

  isFilterChanging.value = true
  setTimeout(() => {
    selectedCategory.value = category
    setTimeout(() => {
      isFilterChanging.value = false
    }, 50)
  }, 200)
}

const nextProject = () => {
  if (selectedProjectIndex.value >= 0 && selectedProjectIndex.value < filteredProjects.value.length - 1) {
    isProjectChanging.value = true
    setTimeout(() => {
      selectedProjectIndex.value++
      selectedImageIndex.value = 0
      const project = filteredProjects.value[selectedProjectIndex.value]
      if (project) {
        selectedProject.value = project
      }
      isProjectChanging.value = false
    }, 150)
  }
}

const prevProject = () => {
  if (selectedProjectIndex.value > 0) {
    isProjectChanging.value = true
    setTimeout(() => {
      selectedProjectIndex.value--
      selectedImageIndex.value = 0
      const project = filteredProjects.value[selectedProjectIndex.value]
      if (project) {
        selectedProject.value = project
      }
      isProjectChanging.value = false
    }, 150)
  }
}

const nextImage = () => {
  if (selectedProject.value && selectedImageIndex.value < selectedProject.value.images.length - 1) {
    selectedImageIndex.value++
  }
}

const prevImage = () => {
  if (selectedImageIndex.value > 0) {
    selectedImageIndex.value--
  }
}

const openModal = (project: Project) => {
  selectedProject.value = project
  selectedProjectIndex.value = filteredProjects.value.findIndex(p => p.id === project.id)
  selectedImageIndex.value = 0
}

const closeModal = () => {
  selectedProject.value = null
  selectedProjectIndex.value = -1
  selectedImageIndex.value = 0
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-16 md:py-24 px-6">
      <div class="container mx-auto">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold leading-tight text-secondary mb-6">
            Ons <span class="text-primary">Portfolio</span>
          </h1>
          <p class="text-xl leading-relaxed text-gray-600">
            Verken honderden succesvolle projecten in residentiële, commerciële en industriële instellingen. Elk project
            is een testament van onze expertise en toewijding.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="py-8 px-6 border-b border-border sticky top-0 bg-white/95 backdrop-blur z-40">
      <div class="container mx-auto">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
              v-for="category in categories"
              :key="category"
              :class="[
                'px-6 py-2 rounded-full font-semibold transition-all duration-200',
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'border-2 border-border text-secondary hover:border-primary'
              ]"
              @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20 px-6">
      <div class="container mx-auto">
        <!-- Masonry Grid -->
        <div :class="[
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max transition-all duration-100',
          isFilterChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        ]">
          <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              :class="[
                'group relative rounded-xl overflow-hidden cursor-pointer h-80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2',
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2 h-96 md:h-auto' : '',
                index % 5 === 3 ? 'md:col-span-2 h-96' : ''
              ]"
              @click="openModal(project)"
          >
            <!-- Image -->
            <img
                :src="project.images[0]"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            >

            <!-- Overlay -->
            <div
                class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300"
            />

            <!-- Content -->
            <div
                class="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
            >
              <span class="text-primary text-sm font-semibold mb-2">{{ project.category }}</span>
              <h3 class="text-white text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ project.description }}
              </p>
              <div
                  class="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-sm font-semibold">Bekijk Details</span>
                <SparklesIcon class="w-4 h-4 ml-2"/>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredProjects.length === 0" class="text-center py-20">
          <p class="text-xl text-gray-600">Geen projecten gevonden in deze categorie.</p>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Teleport v-if="selectedProject" to="body">
      <div
          class="fixed inset-0 bg-secondary/80 backdrop-blur z-50 flex items-center justify-center p-4 animate-fade-in"
          @click="closeModal"
      >
        <div
            class="relative w-full max-w-4xl max-h-screen overflow-auto rounded-2xl bg-white shadow-2xl"
            @click.stop
        >
          <!-- Close Button -->
          <button
              class="absolute top-6 right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              @click="closeModal"
          >
            <XMarkIcon class="w-6 h-6 text-secondary"/>
          </button>

          <!-- Image -->
          <div class="relative w-full h-96 md:h-screen md:max-h-[70vh] overflow-hidden bg-secondary">
            <img
                :src="selectedProject.images[selectedImageIndex]"
                :alt="selectedProject.title"
                :class="['w-full h-full object-cover transition-opacity duration-300', isProjectChanging ? 'opacity-0' : 'opacity-100']"
            >

            <!-- Image Navigation Buttons -->
            <button
                v-if="selectedProject.images.length > 1 && selectedImageIndex > 0"
                class="absolute left-6 bottom-6 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all shadow-lg text-white"
                @click="prevImage"
            >
              <ChevronLeftIcon class="w-6 h-6"/>
            </button>
            <button
                v-if="selectedProject.images.length > 1 && selectedImageIndex < selectedProject.images.length - 1"
                class="absolute right-6 bottom-6 w-12 h-12 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all shadow-lg text-white"
                @click="nextImage"
            >
              <ChevronRightIcon class="w-6 h-6"/>
            </button>

            <!-- Image Counter -->
            <div
                v-if="selectedProject.images.length > 1"
                class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-secondary/90 text-white px-4 py-2 rounded-full text-sm"
            >
              {{ selectedImageIndex + 1 }} / {{ selectedProject.images.length }}
            </div>

            <!-- Project Navigation Buttons -->
            <button
                v-if="selectedProjectIndex > 0"
                class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-all shadow-lg"
                @click="prevProject"
            >
              <ChevronLeftIcon class="w-6 h-6 text-secondary"/>
            </button>
            <button
                v-if="selectedProjectIndex < filteredProjects.length - 1"
                class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center transition-all shadow-lg"
                @click="nextProject"
            >
              <ChevronRightIcon class="w-6 h-6 text-secondary"/>
            </button>
          </div>

          <!-- Content -->
          <div
              :class="['p-8 md:p-12 transition-opacity duration-300', isProjectChanging ? 'opacity-0' : 'opacity-100']">
            <div class="flex items-center gap-3 mb-4">
              <span class="px-4 py-1 bg-primary-light text-primary text-sm font-semibold rounded-full">
                {{ selectedProject.category }}
              </span>
              <span class="text-sm text-gray-500">
                {{ selectedProjectIndex + 1 }} / {{ filteredProjects.length }}
              </span>
            </div>

            <h2 class="text-4xl font-bold text-secondary mb-4">{{ selectedProject.title }}</h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              {{ selectedProject.description }}
            </p>

            <!-- CTA -->
            <div class="border-t border-border pt-8 flex justify-center">
              <NuxtLink
                  to="/contact"
                  class="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg"
              >
                Soortgelijk Project Aanvragen
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
</style>
