import { calculateHeight, calculateWidth } from 'containers/containerUtils'
import { groupedByAlternatives, groupedByCriteria } from 'tests/testdata'

describe('calculateHeight calculates container height based on given dataset', () => {
  it('calculates the height of alternatives presentation', () => {
    expect(calculateHeight(groupedByAlternatives)).toBe(500)
  })

  it('calculates the height of criteria presentation', () => {
    expect(calculateHeight(groupedByCriteria)).toBe(500)
  })
})

describe('calculateWidth calculates container width based on given dataset', () => {
  it('calculates the width of alternatives presentation', () => {
    expect(calculateWidth(groupedByAlternatives)).toBe(600)
  })

  it('calculates the width of criteria presentation', () => {
    expect(calculateWidth(groupedByCriteria)).toBe(600)
  })
})