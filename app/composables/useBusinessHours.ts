export const useBusinessHours = () => {
  const companyInfo = useCompanyInfo()

  /**
   * Parse time string like "08:00 - 18:00" into start and end hours
   */
  const parseTimeRange = (timeStr: string): { start: number; end: number } | null => {
    if (!timeStr || timeStr.toLowerCase().includes('gesloten') || timeStr.toLowerCase().includes('closed')) {
      return null
    }

    const match = timeStr.match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/)
    if (!match || !match[1] || !match[2] || !match[3] || !match[4]) return null

    const startHour = parseInt(match[1])
    const startMin = parseInt(match[2])
    const endHour = parseInt(match[3])
    const endMin = parseInt(match[4])

    return {
      start: startHour + startMin / 60,
      end: endHour + endMin / 60
    }
  }

  /**
   * Check if current time is within business hours
   */
  const isOpen = computed(() => {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours() + now.getMinutes() / 60

    let todayHours: string

    // Determine today's hours based on weekend vs weekday
    if (day === 0 || day === 6) {
      // Weekend (Saturday or Sunday)
      todayHours = companyInfo.hours.saturday
    } else {
      // Weekdays (Monday-Friday)
      todayHours = companyInfo.hours.weekdays
    }

    const timeRange = parseTimeRange(todayHours)
    if (!timeRange) return false

    return currentHour >= timeRange.start && currentHour < timeRange.end
  })

  /**
   * Check if emergency service is available (24/7)
   */
  const isEmergencyAvailable = computed(() => {
    const emergency = companyInfo.hours.emergency.toLowerCase()
    return emergency.includes('24/7') || emergency.includes('24') || emergency.includes('always')
  })

  /**
   * Get current day's hours as a string
   */
  const todayHours = computed(() => {
    const now = new Date()
    const day = now.getDay()

    // Weekend (Saturday or Sunday)
    if (day === 0 || day === 6) return companyInfo.hours.weekend

    // Weekdays (Monday-Friday)
    return companyInfo.hours.weekdays
  })

  /**
   * Get next opening time
   */
  const nextOpeningTime = computed(() => {
    const now = new Date()
    const day = now.getDay()
    const currentHour = now.getHours() + now.getMinutes() / 60

    // Check if we're before today's opening time
    const todayRange = parseTimeRange(todayHours.value)
    if (todayRange && currentHour < todayRange.start) {
      const hours = Math.floor(todayRange.start)
      const minutes = Math.round((todayRange.start - hours) * 60)
      return `Vandaag om ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }

    // Otherwise, we're after hours or closed, so show next business day
    const daysOfWeek = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag']
    const hoursMap = [
      companyInfo.hours.sunday,
      companyInfo.hours.weekdays,
      companyInfo.hours.weekdays,
      companyInfo.hours.weekdays,
      companyInfo.hours.weekdays,
      companyInfo.hours.weekdays,
      companyInfo.hours.saturday
    ]

    for (let i = 1; i <= 7; i++) {
      const nextDay = (day + i) % 7
      const nextDayHours = hoursMap[nextDay]

      if (!nextDayHours) continue

      const nextRange = parseTimeRange(nextDayHours)

      if (nextRange) {
        const hours = Math.floor(nextRange.start)
        const minutes = Math.round((nextRange.start - hours) * 60)
        const dayName = i === 1 ? 'Morgen' : daysOfWeek[nextDay]
        return `${dayName} om ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
      }
    }

    return 'Binnenkort'
  })

  return {
    isOpen,
    isEmergencyAvailable,
    todayHours,
    nextOpeningTime
  }
}
