const formatDate = (date: string): string => {
  if (!date || date === 'TBD') return 'TBD'
  const browserLocale = navigator.language

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat(browserLocale, options).format(new Date(date))
}

export default formatDate
