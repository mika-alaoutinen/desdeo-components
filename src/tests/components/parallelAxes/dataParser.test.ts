import { parallelAxesData } from '../../testdata'
import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import {
  getAttributeNames, getMaxAttributes, getMaxValues
} from '../../../components/parallelAxes/wrapper/dataParser'

describe('getAttributeNames finds all distinct attributes', () => {
  it('returns attributes as string array', () => {
    const data: ParallelAxesData[] = [
      {
        label: 'Alternative 1',
        attributes: [
          { id: '1', x: 'wq fishery', y: 1 },
          { id: '2', x: 'wq city', y: 2 },
        ]
      },
    ]
    expect(getAttributeNames(data)).toEqual(['wq fishery', 'wq city'])
  })

  it('returns only distinct attributes and filters out duplicates', () => {
    const data: ParallelAxesData[] = [
      {
        label: 'Alternative 1',
        attributes: [
          { id: '1', x: 'wq fishery', y: 1 },
          { id: '2', x: 'wq fishery', y: 2 },
        ]
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
      { id: 'city-tax-2', x: 'city tax', y: 8.989781 }
    ]
    expect(getMaxAttributes(parallelAxesData)).toEqual(expected)
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [ 6.042483, 3.410843, 6.887735, 8.989781 ]
    expect(getMaxValues(parallelAxesData)).toEqual(expected)
  })

  it('negative values are treated as non-viable', () => {
    const data: ParallelAxesData[] = [
      {
        label: 'Alternative 1',
        attributes: [
          { id: '1', x: 'wq fishery', y: -1 },
        ]
      },
    ]
    const defaultReturnValue = -0.00001
    expect(getMaxValues(data)).toEqual([defaultReturnValue])
  })
})