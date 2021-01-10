import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import { getAttributeKeys, getMaxAttributes } from '../../../components/parallelAxes/utils'

const data: ParallelAxesData[] = [
  {
    name: 'Adrien',
    attributes: [
      { name: 'strength', value: 5 },
      { name: 'intelligence', value: 10 },
    ]
  },
  {
    name: 'Brice',
    attributes: [
      { name: 'strength', value: 10 },
      { name: 'intelligence', value: 6 },
    ]
  },
  {
    name: 'Charlie',
    attributes: [
      { name: 'Strength', value: 11 },
      { name: 'Luck', value: 3 },
    ]
  },
]

describe('testing', () => {
  it('getMaxAttributes', () => {
    const expected: Attribute[] = [
      { name: 'strength', value: 11 },
      { name: 'intelligence', value: 10 },
      { name: 'luck', value: 3 }
    ]
    expect(getMaxAttributes(data)).toEqual(expected)
  })

  it('getAttributeKeys', () => {
    const keys = getAttributeKeys(data)
    expect(keys).toEqual([ 'strength', 'intelligence', 'luck' ])
  })
})