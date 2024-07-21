const regions: Record<
  string,
  {
    label: string
    flag: string
  }
> = {
  NA: {
    label: 'North America',
    flag: 'https://griffon.octane.gg/regions/na.png'
  },
  EU: {
    label: 'Europe',
    flag: 'https://griffon.octane.gg/regions/eu.png'
  },
  OCE: {
    label: 'Oceania',
    flag: 'https://griffon.octane.gg/regions/oceania.png'
  },
  SAM: {
    label: 'South America',
    flag: 'https://griffon.octane.gg/regions/sam.png'
  },
  ASIA: {
    label: 'Asia',
    flag: 'https://griffon.octane.gg/regions/int.png'
  },
  ME: {
    label: 'Middle East',
    flag: 'https://griffon.octane.gg/regions/int.png'
  },
  AFR: {
    label: 'Africa',
    flag: 'https://griffon.octane.gg/regions/int.png'
  },
  INT: {
    label: 'International',
    flag: 'https://griffon.octane.gg/regions/int.png'
  }
}

const getRegion = (region?: string) =>
  region
    ? regions[region] || {
        label: region,
        flag: 'https://griffon.octane.gg/regions/int.png'
      }
    : {
        label: 'Unknown',
        flag: 'https://griffon.octane.gg/regions/int.png'
      }

export default getRegion
