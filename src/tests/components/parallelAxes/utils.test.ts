import { parallelAxesData } from '../../testdata'
import { Attribute } from '../../../types/dataTypes'

import {
  findByMaxValue, getMaxAttributes, groupByName
} from '../../../components/parallelAxes/utils'

describe('testing', () => {
  it('getMaxAttributes', () => {
    const expected: Attribute[] = [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 30 },
      { name: 'luck', value: 15 }
    ]
    expect(getMaxAttributes(parallelAxesData)).toEqual(expected)
  })

  it('groupByName', () => {
    const attributes: Attribute[] = [
      { name: 'strength', value: 1 },
      { name: 'intelligence', value: 10 },
      { name: 'strength', value: 2 },
      { name: 'intelligence', value: 20 },
    ]

    const expected: Attribute[][] = [
      [
        { name: 'strength', value: 1 },
        { name: 'strength', value: 2 }
      ],
      [
        { name: 'intelligence', value: 10 },
        { name: 'intelligence', value: 20 }
      ]
    ]

    expect(groupByName(attributes)).toEqual(expected)
  })

  it('findByMaxValue', () => {
    const attributes: Attribute[] = [
      { name: 'strength', value: 5 },
      { name: 'strength', value: 10 }
    ]

     expect(findByMaxValue(attributes)).toEqual({ name: 'strength', value: 10 })
  })
})