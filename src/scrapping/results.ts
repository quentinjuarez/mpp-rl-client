export const getSwissResults = (doc: Document, stageName: string): RLMatch[] | null => {
  const stage = getSwissStage(doc, stageName)

  if (!stage) return null

  // Get the match elements within this stage
  const matches = stage.parentElement?.querySelectorAll('.brkts-matchlist-match')

  if (!matches) {
    return null
  }

  return Array.from(matches).map(getMatchResults).filter(Boolean) as RLMatch[]
}

const getSwissStage = (doc: Document, stageName: string) => {
  // Find the stage div by matching the provided stage name
  const stages = doc.querySelectorAll('.brkts-matchlist-title')

  const stage = Array.from(stages).find((stage) => {
    const title = stage.textContent?.trim()

    return title?.includes(stageName)
  })

  return stage
}

const getMatchResults = (match: Element): RLMatch | null => {
  const teams = match.querySelectorAll('.brkts-matchlist-opponent')
  const scores = match.querySelectorAll('.brkts-matchlist-score')

  if (teams.length < 2) return null

  const popup = match.querySelector('.brkts-popup.brkts-match-info-popup')
  const popupTeamsLinks = popup?.querySelectorAll('.brkts-popup-header-opponent a')

  return {
    date:
      popup?.querySelector('.timer-object')?.getAttribute('data-timestamp') === 'error'
        ? null
        : new Date(
            parseInt(popup?.querySelector('.timer-object')?.getAttribute('data-timestamp') || '0') *
              1000
          ).toISOString(),
    finished: !!popup?.querySelector('.timer-object')?.getAttribute('data-finished'),
    blue: {
      name: teams[0].getAttribute('aria-label') || 'TBD',
      score: scores[0].textContent ? parseInt(scores[0].textContent) : null,
      winner: teams[0].classList.contains('brkts-matchlist-slot-winner'),
      url: popupTeamsLinks?.[0]?.getAttribute('href') || null
    },
    orange: {
      name: teams[1].getAttribute('aria-label') || 'TBD',
      score: scores[1].textContent ? parseInt(scores[1].textContent) : null,
      winner: teams[1].classList.contains('brkts-matchlist-slot-winner'),
      url: popupTeamsLinks?.[1]?.getAttribute('href') || null
    }
  }
}

export function extractBracketData(doc: Document, round: number) {
  const bracket = doc.querySelector('.brkts-bracket')
  if (!bracket) return null

  // true if has two direct children .brkts-round-header
  const hasUpperBracket = bracket.querySelectorAll('.brkts-round-header').length === 2

  const object: Record<number, Element[]> = {}

  if (hasUpperBracket) {
    const children = [
      bracket.childNodes[1].childNodes[0],
      bracket.childNodes[2].childNodes[0]
    ] as Element[]

    object[1] = children
  }

  const body = bracket.querySelector('.brkts-round-body')

  if (!body) return null

  const bracketData = separateBracketData(
    hasUpperBracket ? (bracket.childNodes[4] as Element) : body,
    round,
    object
  )

  const matchesByRound: Record<number, RLMatch[]> = Object.keys(bracketData).reduce(
    (acc, key) => {
      const matches = bracketData[parseInt(key)]
        .map(getMatchFromBracket)
        .filter(Boolean) as RLMatch[]
      acc[parseInt(key)] = matches
      return acc
    },
    {} as Record<number, RLMatch[]>
  )

  return matchesByRound
}

// recursive function to extract bracket data
const separateBracketData = (
  body: Element,
  round: number,
  data: Record<number, Element[]>
): Record<number, Element[]> => {
  const lower = body.querySelector('.brkts-round-lower')

  if (!lower) {
    // If no lower round, add the current element to the correct round in the data object
    if (!data[round]) {
      data[round] = []
    }
    const centerEl = body.querySelector('.brkts-round-center')
    if (centerEl) {
      data[round].push(centerEl)
      centerEl.remove()
    }
    return data
  }

  const bodies = lower.querySelectorAll('.brkts-round-body')

  // Add the current round's center element to the data object
  if (!data[round]) {
    data[round] = []
  }
  const centerEl = body.querySelector('.brkts-round-center')
  if (centerEl) {
    data[round].push(centerEl)
  }

  // Recursively process each body in the lower rounds
  Array.from(bodies).forEach((b) => separateBracketData(b, round - 1, data))

  return data
}

const getMatchFromBracket = (match: Element): RLMatch | null => {
  const teams = match.querySelectorAll('.brkts-opponent-entry')

  if (teams.length < 2) return null

  const popup = match.querySelector('.brkts-popup.brkts-match-info-popup')
  const popupTeamsLinks = popup?.querySelectorAll('.brkts-popup-header-opponent a')

  return {
    date:
      popup?.querySelector('.timer-object')?.getAttribute('data-timestamp') === 'error'
        ? null
        : new Date(
            parseInt(popup?.querySelector('.timer-object')?.getAttribute('data-timestamp') || '0') *
              1000
          ).toISOString(),
    finished: !!popup?.querySelector('.timer-object')?.getAttribute('data-finished'),
    blue: {
      name: teams[0].getAttribute('aria-label') || 'TBD',
      score: parseInt(teams[0].querySelector('.brkts-opponent-score-outer')?.textContent || '0'),
      winner: !!teams[0]?.querySelector('.brkts-opponent-entry-left.brkts-opponent-win'),
      url: popupTeamsLinks?.[0]?.getAttribute('href') || null
    },
    orange: {
      name: teams[1].getAttribute('aria-label') || 'TBD',
      score: parseInt(teams[1].querySelector('.brkts-opponent-score-outer')?.textContent || '0'),
      winner: !!teams[1]?.querySelector('.brkts-opponent-entry-left.brkts-opponent-win'),
      url: popupTeamsLinks?.[1]?.getAttribute('href') || null
    }
  }
}
