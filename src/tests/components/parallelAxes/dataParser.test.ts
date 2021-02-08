import { parallelAxesData } from 'tests/testdata'
import { Attribute } from 'types/dataTypes'

import { getMaxAttributes, getMaxAttributeValues } from 'components/parallelAxes/dataParser'

describe('getMaxAttributes finds the attributes with largest values in a dataset', () => {
  it('maps attributes as an array with max values', () => {
    const expected: Attribute[] = [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 30 },
      { name: 'luck', value: 17 }
    ]
    expect(getMaxAttributes(parallelAxesData)).toEqual(expected)
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [ 15, 30, 17 ]
    expect(getMaxAttributeValues(parallelAxesData)).toEqual(expected)
  })
})