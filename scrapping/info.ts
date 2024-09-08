const formatKey = (key: string) => {
  // text to camelCase
  // Start Date -> start_date
  const clean = key.replace(/[^a-zA-Z0-9 ]/g, '').trim()

  return clean
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

export const getInfo = (doc: Document) => {
  const name = doc.querySelector('.infobox-header')?.childNodes[1].textContent || 'TBD'
  const image =
    doc.querySelector('.infobox-image-wrapper .darkmode img')?.getAttribute('src') || null

  const test = doc.querySelectorAll('.infobox-cell-2.infobox-description')

  const data = Array.from(test).reduce((acc, el) => {
    const key = formatKey(el.childNodes[0].textContent || 'TBD')
    const value = el.parentElement?.childNodes[1].textContent?.trim() || 'TBD'

    return {
      ...acc,
      [key]: value
    }
  }, {})

  return {
    name,
    image,
    ...data
  }
}
