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

  interface RLMatch {}

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
  }
}
