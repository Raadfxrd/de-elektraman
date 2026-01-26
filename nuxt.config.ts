import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
    ],

    runtimeConfig: {
        public: {
            appName: '',
            websiteName: '',
            companyDescription: '',
            companyEmail: '',
            companyPhone: '',
            companyPhoneDisplay: '',
            companyEmergencyPhone: '',
            companyEmergencyPhoneDisplay: '',
            hoursWeekdays: '',
            hoursWeekend: '',
            hoursSaturday: '',
            hoursSunday: '',
            hoursEmergency: '',
            yearsExperience: '',
            happyClients: '',
            socialLinkedin: '',
            socialFacebook: '',
            socialInstagram: '',
            companyAddress: '',
            companySlogan: '',
        }
    },

    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        }
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
})