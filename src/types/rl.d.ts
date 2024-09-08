export {}

// soft delete those types
declare module 'rl.d.ts' {
  type PaginatedResponse<T> = {
    data: T[]
    page: number
    totalCount: number
    perPage: number
  }

  interface RLEvent {
    _id: string
    slug: string
    name: string
    start_date: string
    end_date: string
    region: string
    mode: number
    prize: Prize
    tier: string
    image: string
    groups: string[]
    stages: Stage[]
  }

  interface RLPrize {
    amount: number
    currency: string
  }

  interface RlStage {
    _id: number
    name: string
    format: string
    region: string
    start_date: string
    end_date: string
    liquipedia: string
    qualifier?: boolean
    prize?: Prize
  }

  interface RLEnrichedEvent extends RLEvent {
    participants: RLParticipant[]
    matches: RLMatch[]
  }

  interface RLMatch {
    _id: string
    slug: string
    event: RLMatchEvent
    stage: {
      _id: number
      name: string
    }
    date: string
    format: {
      type: string
      length: number
    }
    blue: {
      score: number
      winner: boolean
      team: {
        team: RLTeam
      }
    }
    orange: {
      score: number
      winner: boolean
      team: {
        team: RLTeam
      }
    }
    number: number
    games: RLGame[]
  }

  interface RLGame {
    _id: string
    duration: number
    orange: number
    blue: number
    ballchasing: string
  }

  interface RLGamePlayer {
    player: RLPlayer
    stats: RLStats
    // advanced: any
  }

  interface RLEnrichedMatch extends RLMatch {
    games: RLGame[]
  }

  interface RLMatchEvent {
    _id: string
    slug: string
    name: string
    region: string
    mode: number
    tier: string
    image: string
  }

  interface RLParticipant {
    team: RLTeam
    players: RLPlayer[]
  }

  interface RLPlayer {
    _id: string
    slug: string
    tag: string
    country: string
    name: string
    coach: boolean
  }

  interface RLTeam {
    _id: string
    slug: string
    name: string
    image?: string
    region?: string
    relevant?: boolean
  }

  interface RLEnrichedTeam extends RLTeam {
    players: RLPlayer[]
  }
}
