import { groupedByAlternatives } from '../../tests/testdata'
import { range } from '../../utils/utils'

const createAlternativesLabels = (): string[] => {
  const alternatives = groupedByAlternatives[0].data.length
  return range(alternatives).map(n => `Alternative\n${n}`)
}

export { createAlternativesLabels }