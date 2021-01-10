import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import {
  findByMaxValue, getMaxAttributes, groupByName, sanitizeData
} from '../../../components/parallelAxes/utils'

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
      { name: 'strength', value: 11 },
      { name: 'luck', value: 3 },
    ]
  },
]

describe('testing', () => {
  it('sanitizeData', () => {
    const unsanitized: ParallelAxesData[] = [{
      name: 'Adrien',
      attributes: [{ name: 'sTrENGth', value: 10 }]
    }]

    const expected: ParallelAxesData[] = [{
      name: 'Adrien',
      attributes: [{ name: 'strength', value: 10 }]
    }]

    expect(sanitizeData(unsanitized)).toEqual(expected)
  })

  it('getMaxAttributes', () => {
    const expected: Attribute[] = [
      { name: 'strength', value: 11 },
      { name: 'intelligence', value: 10 },
      { name: 'luck', value: 3 }
    ]
    expect(getMaxAttributes(data)).toEqual(expected)
  })

  it('groupByName', () => {
    const attributes: Attribute[] = [
      { name: 'strength', value: 5 },
      { name: 'intelligence', value: 10 },
      { name: 'strength', value: 10 },
      { name: 'intelligence', value: 6 },
    ]

    const expected: Attribute[][] = [
      [
        { name: 'strength', value: 5 },
        { name: 'strength', value: 10 }
      ],
      [
        { name: 'intelligence', value: 10 },
        { name: 'intelligence', value: 6 }
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