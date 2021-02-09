import { parallelAxesData } from 'tests/testdata'
import { Attribute } from 'types/dataTypes'

import { getMaxAttributes, getMaxValues } from 'components/parallelAxesWrapper/dataParser'

describe('getMaxAttributes finds the attributes with largest values in a dataset', () => {
  it('maps attributes as an array with max values', () => {
    const expected: Attribute[] = [
      { x: 'strength', y: 15 },
      { x: 'intelligence', y: 30 },
      { x: 'luck', y: 17 }
    ]
    expect(getMaxAttributes(parallelAxesData)).toEqual(expected)
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [ 15, 30, 17 ]
    expect(getMaxValues(parallelAxesData)).toEqual(expected)
  })
})