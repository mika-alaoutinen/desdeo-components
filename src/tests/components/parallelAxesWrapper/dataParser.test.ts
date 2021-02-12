import { parallelAxesData } from '../../testdata'
import { Attribute } from '../../../types/dataTypes'

import { getMaxAttributes, getMaxValues } from '../../../components/parallelAxesWrapper/dataParser'

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
})