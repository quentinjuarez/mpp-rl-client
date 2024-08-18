export {}

// soft delete those types
declare module 'scrapping.d.ts' {
  type RLEvent = {
    name: string
    url: string | null
    participants: RLTeam[]
    formats: RLFormat[]
  }

  type RLTeam = {
    name: string
    logo: string | null
    region: string | null
    flag: string | null
    url: string | null
    players: RLPlayer[]
  }

  type RLPlayer = {
    name: string
    url: string | null
    country: string | null
    flag: string | null
    isCoach: boolean
    isSubstitute: boolean
  }

  type RLFormat = {
    name: string
    stages: RLStage[]
  }

  type RLStage = {
    name: string
    matches: RLMatch[]
  }

  type RLMatch = {
    date: string | null
    finished: boolean
    blue: RLMatchTeam
    orange: RLMatchTeam
  }

  type RLMatchTeam = {
    name: string
    score: number | null
    winner: boolean
    url: string | null
  }
}
