export const useCompanyInfo = () => {
  const config = useRuntimeConfig()

  return {
    // App Details
    appName: config.public.appName || 'De Elektraman',
    websiteName: config.public.websiteName || 'De Elektraman - Professionele Elektrische Diensten',
    description: config.public.companyDescription || 'Professionele elektrische diensten voor al uw behoeften.',
    slogan: config.public.companySlogan || 'Uw betrouwbare elektricien',

    // Contact Information
    email: config.public.companyEmail || 'info@deelektraman.nl',
    phone: config.public.companyPhone || '+31612345678',
    phoneDisplay: config.public.companyPhoneDisplay || '+31 (0) 6 1234 5678',
    emergencyPhone: config.public.companyEmergencyPhone || '+31698765432',
    emergencyPhoneDisplay: config.public.companyEmergencyPhoneDisplay || '06 9876 5432',
    address: config.public.companyAddress || 'Nederland',

    // Business Hours
    hours: {
      weekdays: config.public.hoursWeekdays || '08:00 - 18:00',
      saturday: config.public.hoursSaturday || '09:00 - 15:00',
      sunday: config.public.hoursSunday || 'Gesloten',
      weekend: config.public.hoursWeekend || 'Gesloten',
      emergency: config.public.hoursEmergency || '24/7'
    },

    // Company Stats
    yearsExperience: config.public.yearsExperience || '2',
    happyClients: config.public.happyClients || '50',

    // Social Media
    social: {
      linkedin: config.public.socialLinkedin || '#',
      facebook: config.public.socialFacebook || '#',
      instagram: config.public.socialInstagram || '#'
    }
  }
}
