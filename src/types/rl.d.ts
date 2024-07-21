export {}

declare global {
  type PaginatedResponse<T> = T & {
    page: number
    pageSize: number
    perPage: number
  }

  interface RLEvent {
    _id: string
    slug: string
    name: string
    startDate: Date
    endDate: Date
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
    startDate: Date
    endDate: Date
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
    date: Date
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
      team: {
        team: RLTeam
      }
    }
    number: number
  }

  interface RLGame {
    _id: string
    number: number
    // match: Match
    map: {
      id: string
      name: string
    }
    duration: number
    date: Date
    blue: {
      winner: boolean
      matchWinner: boolean
      team: {
        team: RLTeam
        stats: RLTeamStats
      }
      players: RLGamePlayer[]
    }
    orange: {
      team: {
        team: RLTeam
        stats: RLTeamStats
      }
      players: OrangePlayer[]
    }
    ballchasing: string
    flipBallchasing: boolean
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
  }

  interface RLTeam {
    _id: string
    slug: string
    name: string
    image?: string
    region?: string
    relevant?: boolean
  }
}
