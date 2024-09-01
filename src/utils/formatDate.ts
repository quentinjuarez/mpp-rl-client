const formatDate = (date: string): string => {
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
