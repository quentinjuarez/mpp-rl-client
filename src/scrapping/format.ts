import { extractBracketData, getSwissResults } from './results'

type RLFormat = {
  name: string
  stages: RLStage[]
}

type RLStage = {
  name: string
  matches: RLMatch[]
}

export const getFormatWithMatches = (doc: Document): RLFormat[] => {
  const swiss = doc.querySelectorAll('.brkts-matchlist-title')

  const swissStages = Array.from(swiss).map((stage) => {
    const name = stage.childNodes[0].textContent!
    return {
      name,
      matches: getSwissResults(doc, name) || []
    }
  })

  const playoffs = doc.querySelectorAll('.brkts-header.brkts-header-div')

  const matchesByRound = extractBracketData(doc, playoffs.length)

  const playoffsStages = Array.from(playoffs).map((stage, index) => {
    return {
      name: stage.childNodes[0].textContent!,
      matches: matchesByRound![index + 1] || []
    }
  })

  return [
    {
      name: 'Swiss Stage',
      stages: swissStages
    },
    {
      name: 'Playoffs',
      stages: playoffsStages
    }
  ]
}
