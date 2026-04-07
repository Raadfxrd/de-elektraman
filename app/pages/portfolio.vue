<script lang="ts" setup>
import {computed, ref} from 'vue'
import {ChevronLeftIcon, ChevronRightIcon, SparklesIcon, XMarkIcon} from '@heroicons/vue/24/solid'

interface Project {
  id: number
  images: string[]
  title: string
  category: string
}

const projects = ref<Project[]>([
  {
    id: 1,
    images: ['/elektra-aanleg/elektra-aanleg-1.jpeg', '/elektra-aanleg/elektra-aanleg-4.jpeg', '/elektra-aanleg/elektra-aanleg-2.jpeg', '/elektra-aanleg/elektra-aanleg-3.jpeg'],
    title: 'Elektra aanleg',
    category: 'Residentieel',
  },
  {
    id: 2,
    images: ['/groepskast/groepskast-2.jpeg', '/groepskast/groepskast-1.jpeg', '/groepskast/groepskast-3.jpeg', '/groepskast/groepskast-4.jpeg', '/groepskast/groepskast-5.jpeg'],
    title: 'Groepskast vervangen/aanleggen',
    category: 'Residentieel',
  },
  {
    id: 3,
    images: ['/grote-batterijen/grote-batterijen-1.jpeg', '/grote-batterijen/grote-batterijen-2.jpeg', '/grote-batterijen/grote-batterijen-3.jpeg', '/grote-batterijen/grote-batterijen-4.jpeg', '/grote-batterijen/grote-batterijen-5.jpeg', '/grote-batterijen/grote-batterijen-6.jpeg'],
    title: 'Grote batterijen (Vanaf 40.8 kW)',
    category: 'Commercieel',
  },
  {
    id: 4,
    images: ['/grote-laadpalen/grote-laadpalen-4.jpeg', '/grote-laadpalen/grote-laadpalen-2.jpeg', '/grote-laadpalen/grote-laadpalen-3.jpeg', '/grote-laadpalen/grote-laadpalen-1.jpeg'],
    title: 'Grote laadpalen (3,7 kW - 720 kW)',
    category: 'Commercieel',
  },
  {
    id: 5,
    images: ['/kleine-laadpalen/kleine-laadpalen-1.jpeg', '/kleine-laadpalen/kleine-laadpalen-2.jpeg', '/kleine-laadpalen/kleine-laadpalen-3.jpeg'],
    title: 'Kleine laadpalen (3,7 kW - 22 kW)',
    category: 'Residentieel',
  },
  {
    id: 6,
    images: ['/led-verlichting/led-verlichting.jpeg'],
    title: 'LED-verlichting',
    category: 'Onderhoud',
  },
  {
    id: 7,
    images: ['/storing/storing-1.jpeg', '/storing/storing-2.jpeg', '/storing/storing-3.jpeg'],
    title: 'Storing',
    category: 'Onderhoud',
  },
  {
    id: 8,
    images: ['/thuisbatterijen/thuisbatterijen-4.jpeg', '/thuisbatterijen/thuisbatterijen-2.jpeg', '/thuisbatterijen/thuisbatterijen-1.jpeg', '/thuisbatterijen/thuisbatterijen-3.jpeg'],
    title: 'Thuisbatterijen (Tot 40,8 kW)',
    category: 'Residentieel',
  },
  {
    id: 9,
    images: ['/verdeel-inrichting/verdeel-inrichting-3.jpeg', '/verdeel-inrichting/verdeel-inrichting-2.jpeg', '/verdeel-inrichting/verdeel-inrichting-1.jpeg', '/verdeel-inrichting/verdeel-inrichting-4.jpeg'],
    title: 'Verdeel inrichting',
    category: 'Commercieel',
  },
  {
    id: 10,
    images: ['/verlichting-design/verlichting-design-1.jpeg', '/verlichting-design/verlichting-design-2.jpeg', '/verlichting-design/verlichting-design-3.jpeg', '/verlichting-design/verlichting-design-4.jpeg', '/verlichting-design/verlichting-design-5.jpeg'],
    title: 'Verlichting design',
    category: 'Residentieel',
  },
  {
    id: 11,
    images: ['/zonne-energie/zonne-energie-1.jpeg', '/zonne-energie/zonne-energie-2.jpeg', '/zonne-energie/zonne-energie-3.jpeg', '/zonne-energie/zonne-energie-4.jpeg', '/zonne-energie/zonne-energie-5.jpeg', '/zonne-energie/zonne-energie-6.jpeg'],
    title: 'Zonne-energie',
    category: 'Residentieel',
  },
])

const categories = ref(['Alles', 'Residentieel', 'Commercieel', 'Onderhoud'])
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
    <PageHero
        :compact="true"
        description="Verken alle succesvolle projecten in residentiële en commerciële instellingen. Elk project is een testament van onze expertise en toewijding."
        highlight-text="Portfolio"
        title="Ons"
    />

    <!-- Category Filter -->
    <section
        class="py-6 md:py-8 px-4 md:px-6 border-b border-border sticky top-18.25 md:top-0 bg-white/95 backdrop-blur z-40">
      <div class="container mx-auto">
        <div class="flex flex-wrap gap-2 md:gap-3 justify-center">
          <button
              v-for="category in categories"
              :key="category"
              :class="[
                'px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-200 cursor-pointer',
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
    <section class="py-12 md:py-20 px-4 md:px-6">
      <div class="container mx-auto">
        <!-- Masonry Grid -->
        <div
            :class="[
          'columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 transition-all duration-100',
          isFilterChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        ]">
          <div
              v-for="(project, index) in filteredProjects"
              :key="project.id"
              :class="[
                'group relative rounded-xl overflow-hidden cursor-pointer mb-6 break-inside-avoid transition-all duration-300 hover:shadow-2xl',
                index % 7 === 0 || index % 7 === 4 ? 'h-150' : 'h-100'
              ]"
              @click="openModal(project)"
          >
            <!-- Image -->
            <img
                :alt="project.title"
                :src="project.images[0]"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    <Teleport to="body">
      <Transition
          appear
          enter-active-class="transition-opacity duration-200 ease-out motion-reduce:transition-none"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in motion-reduce:transition-none"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div
            v-if="selectedProject"
            class="fixed inset-0 bg-secondary/80 backdrop-blur z-50 flex items-center justify-center p-2 md:p-4"
            @click="closeModal"
        >
          <Transition
              appear
              enter-active-class="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              enter-from-class="opacity-0 translate-y-2 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in motion-reduce:transition-none"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-2 scale-95"
          >
            <div
                class="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl max-h-[94vh] lg:max-h-[92vh] overflow-auto rounded-xl md:rounded-2xl bg-white shadow-2xl"
                @click.stop
            >
              <!-- Close Button -->
              <button
                  class="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                  @click="closeModal"
              >
                <XMarkIcon class="w-6 h-6 text-secondary"/>
              </button>

              <!-- Image -->
              <div
                  class="relative w-full h-64 sm:h-80 md:h-96 lg:h-[56vh] xl:h-[60vh] 2xl:h-[64vh] overflow-hidden bg-secondary">
                <img
                    :alt="selectedProject.title"
                    :class="['w-full h-full object-cover transition-opacity duration-300', isProjectChanging ? 'opacity-0' : 'opacity-100']"
                    :src="selectedProject.images[selectedImageIndex]"
                >

                <!-- Image Navigation Buttons -->
                <button
                    v-if="selectedProject.images.length > 1 && selectedImageIndex > 0"
                    class="absolute left-2 md:left-6 bottom-2 md:bottom-6 h-10 md:h-12 px-3 md:px-4 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-all shadow-lg text-white text-xs md:text-sm font-semibold"
                    aria-label="Vorige foto"
                    title="Vorige foto"
                    @click="prevImage"
                >
                  <ChevronLeftIcon class="w-5 h-5 md:w-6 md:h-6"/>
                  <span>Vorige foto</span>
                </button>
                <button
                    v-if="selectedProject.images.length > 1 && selectedImageIndex < selectedProject.images.length - 1"
                    class="absolute right-2 md:right-6 bottom-2 md:bottom-6 h-10 md:h-12 px-3 md:px-4 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center gap-1.5 md:gap-2 transition-all shadow-lg text-white text-xs md:text-sm font-semibold"
                    aria-label="Volgende foto"
                    title="Volgende foto"
                    @click="nextImage"
                >
                  <ChevronRightIcon class="w-5 h-5 md:w-6 md:h-6"/>
                  <span>Volgende foto</span>
                </button>

                <!-- Image Counter -->
                <div
                    v-if="selectedProject.images.length > 1"
                    class="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 bg-secondary/90 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm"
                >
                  {{ selectedImageIndex + 1 }} / {{ selectedProject.images.length }}
                </div>

                <!-- Project Navigation Buttons -->
                <button
                    v-if="selectedProjectIndex > 0"
                    class="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full items-center justify-center transition-all shadow-lg"
                    @click="prevProject"
                >
                  <ChevronLeftIcon class="w-6 h-6 text-secondary"/>
                </button>
                <button
                    v-if="selectedProjectIndex < filteredProjects.length - 1"
                    class="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full items-center justify-center transition-all shadow-lg"
                    @click="nextProject"
                >
                  <ChevronRightIcon class="w-6 h-6 text-secondary"/>
                </button>
              </div>

              <!-- Content -->
              <div
                  :class="['p-6 md:p-8 lg:p-12 transition-opacity duration-300', isProjectChanging ? 'opacity-0' : 'opacity-100']">
                <div class="flex items-center gap-3 mb-4">
              <span
                  class="px-3 md:px-4 py-1 bg-primary-light text-primary text-xs md:text-sm font-semibold rounded-full">
                {{ selectedProject.category }}
              </span>
                  <span class="text-xs md:text-sm text-gray-500">
                {{ selectedProjectIndex + 1 }} / {{ filteredProjects.length }}
              </span>
                </div>

                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">{{
                    selectedProject.title
                  }}</h2>

                <!-- CTA -->
                <div class="border-t border-border pt-6 md:pt-8 flex justify-center">
                  <NuxtLink
                      class="inline-block w-full sm:w-auto text-center px-6 md:px-8 py-3 md:py-4 bg-primary text-white text-sm md:text-base font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg"
                      :to="{ path: '/contact', hash: '#contact-form', query: { category: selectedProject.category } }"
                  >
                    Soortgelijk Project Aanvragen
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

