import { parallelAxes } from 'tests/testdata'
import { Attribute } from 'types/dataTypes'

import { getMaxAttributes, getMaxValues } from 'components/parallelAxesWrapper/dataParser'

describe('getMaxAttributes finds the attributes with largest values in a dataset', () => {
  it('maps attributes as an array with max values', () => {
    const expected: Attribute[] = [
      { x: 'wq fishery', y: 6.042483 },
      { x: 'wq city', y: 3.410843 },
      { x: 'roi', y: 6.887735 },
      { x: 'city tax', y: 8.989781 }
    ]
    expect(getMaxAttributes(parallelAxes)).toEqual(expected)
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [ 6.042483, 3.410843, 6.887735, 8.989781 ]
    expect(getMaxValues(parallelAxes)).toEqual(expected)
  })
})