const formatDate = (date: string | Date): string => {
  if (!date || date === 'TBD') return 'TBD'
  const browserLocale = navigator.language

  const rawDate = new Date(date)

  return `${rawDate.toLocaleDateString(browserLocale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })}`
}

export default formatDate
