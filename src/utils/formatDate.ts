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

export const getDay = (date: Date): string => {
  const browserLocale = navigator.language

  return `${date.toLocaleDateString(browserLocale, {
    weekday: 'long'
  })}`
}
export default formatDate
