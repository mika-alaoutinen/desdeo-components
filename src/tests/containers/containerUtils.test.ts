import { dataset } from '../testdata'
import { createAlternativeSets, createCriteriaSets } from '../../data/transformations'

import { calculateHeight, calculateWidth } from '../../containers/containerUtils'

// Create test data
const groupedByAlternatives = createAlternativeSets(dataset)
const groupedByCriteria = createCriteriaSets(dataset)

describe('Calculates chart height based on dataset and chart orientation', () => {
  const expectedHeight = 500
  const defaultHeight = 350

  it('calculates height of horizontal chart that is grouped by alternatives', () => {
    const height = calculateHeight(groupedByAlternatives, 'horizontal')
    expect(height).toBe(expectedHeight)
  })

  it('vertical charts that are grouped by alternatives use default height', () => {
    const height = calculateHeight(groupedByCriteria, 'vertical')
    expect(height).toBe(defaultHeight)
  })

  it('if calculated height is < 350, return default value instead', () => {
    const height = calculateHeight([], 'horizontal')
    expect(height).toBe(defaultHeight)
  })
})

describe('Calculates chart width based on dataset and chart orientation', () => {
  const expectedWidth = 600
  const defaultWidth = 350

  it('calculates width of chart that is grouped by alternatives when orientation is not given', () => {
    const width = calculateWidth(groupedByCriteria, 'vertical')
    expect(width).toBe(expectedWidth)
  })

  it('horizontal charts that are grouped by criteria use default width', () => {
    const width = calculateWidth(groupedByCriteria, 'horizontal')
    expect(width).toBe(defaultWidth)
  })

  it('if calculated width is < 350, return default value instead', () => {
    const height = calculateHeight([], 'horizontal')
    expect(height).toBe(defaultWidth)
  })
})