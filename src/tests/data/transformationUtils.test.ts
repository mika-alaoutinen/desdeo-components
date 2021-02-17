import { dataset } from '../../data/testdata'
import { CoordinateSet } from '../../types/dataTypes'

import { createAlternativeSets, createCriteriaSets } from '../../data/transformationUtils'

describe('createAlternativeSets produces datasets that are grouped by alternative solutions', () => {
  const expected: CoordinateSet[] = [
    {
      data: [
        { id: 'a1', isSelected: false, x: 1, y: 1 },
        { id: 'a2', isSelected: false, x: 2, y: 2 },
        { id: 'a3', isSelected: false, x: 3, y: 3 },
      ]
    },
    {
      data: [
        { id: 'b1', isSelected: false, x: 1, y: 4 },
        { id: 'b2', isSelected: false, x: 2, y: 5 },
        { id: 'b3', isSelected: false, x: 3, y: 6 },
      ]
    },
  ]

  it('transforms alternatives data as expected', () => {
    expect(createAlternativeSets(dataset)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createAlternativeSets([])).toEqual([])
  })
})

describe('createCriteriaSets produces datasets that are grouped by available criteria', () => {
  const expected: CoordinateSet[] = [
    {
      data: [
        { id: 'a1', isSelected: false, x: 1, y: 1 },
        { id: 'b1', isSelected: false, x: 2, y: 4 },
      ]
    },
    {
      data: [
        { id: 'a2', isSelected: false, x: 1, y: 2 },
        { id: 'b2', isSelected: false, x: 2, y: 5 },
      ]
    },
    {
      data: [
        { id: 'a3', isSelected: false, x: 1, y: 3 },
        { id: 'b3', isSelected: false, x: 2, y: 6 },
      ]
    },
  ]

  it('transforms criteria data as expected', () => {
    expect(createCriteriaSets(dataset)).toEqual(expected)
  })

  it ('handles an empty input', () => {
    expect(createCriteriaSets([])).toEqual([])
  })
})