import { parallelAxesData } from '../../testdata'
import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import {
  getAttributeNames, getMaxAttributes, getMaxAttributeValues
} from '../../../components/parallelAxes/dataParser'

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

describe('getAttributeNames find all unique attribute names', () => {
  it('maps names as an array of strings', () => {
    const expected = [ 'strength', 'intelligence', 'luck' ]
    expect(getAttributeNames(parallelAxesData)).toEqual(expected)
  })

  it('names are converted to lowercase', () => {
    const data: ParallelAxesData[] = [{
      name: 'placeholder',
      attributes: [ { name: 'sTRengTh', value: 1 } ]
    }]
    expect(getAttributeNames(data)).toEqual([ 'strength' ])
  })
})

describe('getMaxAttributeValues find the largest value for each kind of attribute', () => {
  it('maps values as an array of numbers', () => {
    const expected = [ 15, 30, 17 ]
    expect(getMaxAttributeValues(parallelAxesData)).toEqual(expected)
  })
})