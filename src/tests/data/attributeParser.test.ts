import { attributeSet } from '../testdata'
import { AttributeSet, Attribute } from '../../types/dataTypes'

import {
  getAttributeNames,
  getMaxAttributes,
  getMaxValues,
  normalizeData,
} from '../../data/attributeParser'

describe('getAttributeNames finds all distinct attributes', () => {
  it('returns attributes as string array', () => {
    const data: AttributeSet[] = [
      {
        label: 'Alternative 1',
        attributes: [
          { id: '1', x: 'wq fishery', y: 1 },
          { id: '2', x: 'wq city', y: 2 },
        ],
      },
    ]
    expect(getAttributeNames(data)).toEqual(['wq fishery', 'wq city'])
  })

  it('returns only distinct attributes and filters out duplicates', () => {
    const data: AttributeSet[] = [
      {
        label: 'Alternative 1',
        attributes: [
          { id: '1', x: 'wq fishery', y: 1 },
          { id: '2', x: 'wq fishery', y: 2 },
        ],
      },
    ]
    expect(getAttributeNames(data)).toEqual(['wq fishery'])
  })

  it('handles empty input', () => {
    expect(getAttributeNames([])).toEqual([])
  })
})

describe('getMaxAttributes finds the attributes with largest values in a dataset', () => {
  it('maps attributes as an array with max values', () => {
    const expected: Attribute[] = [
      { id: 'wq-fishery-2', x: 'wq fishery', y: 6.042483 },
      { id: 'wq-city-2', x: 'wq city', y: 3.410843 },
      { id: 'roi-2', x: 'roi', y: 6.887735 },
      { id: 'city-tax-2', x: 'city tax', y: 8.989781 },
    ]
    expect(getMaxAttributes(attributeSet)).toEqual(expected)
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [6.042483, 3.410843, 6.887735, 8.989781]
    expect(getMaxValues(attributeSet)).toEqual(expected)
  })

  it('negative values are treated as non-viable', () => {
    const data: AttributeSet[] = [
      {
        label: 'Alternative 1',
        attributes: [{ id: '1', x: 'wq fishery', y: -1 }],
      },
    ]
    const defaultReturnValue = -0.00001
    expect(getMaxValues(data)).toEqual([defaultReturnValue])
  })
})

describe('Data is cleaned up by sanitizing inputs and normalizing values', () => {
  const normalizedData: AttributeSet[] = [
    {
      label: 'Alternative 1',
      attributes: [
        { id: 'wq-fishery-1', x: 'wq fishery', y: 0.9529405378550507 },
        { id: 'wq-city-1', x: 'wq city', y: 0.9309340828645587 },
        { id: 'roi-1', x: 'roi', y: 0.8842226072867204 },
        { id: 'city-tax-1', x: 'city tax', y: 0.27190940468961367 },
      ],
    },
    {
      label: 'Alternative 2',
      attributes: [
        { id: 'wq-fishery-2', x: 'wq fishery', y: 1 },
        { id: 'wq-city-2', x: 'wq city', y: 1 },
        { id: 'roi-2', x: 'roi', y: 1 },
        { id: 'city-tax-2', x: 'city tax', y: 1 },
      ],
    },
  ]

  it('data should be normalized', () => {
    expect(normalizeData(attributeSet)).toEqual(normalizedData)
  })
})
