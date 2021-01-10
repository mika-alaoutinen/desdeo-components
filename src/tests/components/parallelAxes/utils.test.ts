import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import {
  NormalizedData,
  findByMaxValue, getMaxAttributes, groupByName, normalizeData, sanitizeData
} from '../../../components/parallelAxes/utils'

const data: ParallelAxesData[] = [
  {
    name: 'Adrien',
    attributes: [
      { name: 'strength', value: 5 },
      { name: 'intelligence', value: 30 },
    ]
  },
  {
    name: 'Brice',
    attributes: [
      { name: 'strength', value: 10 },
      { name: 'intelligence', value: 25 },
    ]
  },
  {
    name: 'Casey',
    attributes: [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 20 },
      { name: 'luck', value: 15 }
    ]
  },
]

describe('testing', () => {
  it('normalizeData', () => {
    const expected: NormalizedData[] = [
      {
        name: 'Adrien',
        data: [
          { x: 'strength', y: 0.3333333333333333 },
          { x: 'intelligence', y: 1 },
        ]
      },
      {
        name: 'Brice',
        data: [
          { x: 'strength', y: 0.6666666666666666 },
          { x: 'intelligence', y: 0.8333333333333334 },
        ]
      },
      {
        name: 'Casey',
        data: [
          { x: 'strength', y: 1 },
          { x: 'intelligence', y: 0.6666666666666666 },
          { x: 'luck', y: 1 },
        ]
      },
    ]
    expect(normalizeData(data)).toEqual(expected)
  })

  it('sanitizeData', () => {
    const unsanitized: ParallelAxesData[] = [{
      name: 'Adrien',
      attributes: [{ name: 'sTrENGth', value: 5 }]
    }]

    const expected: ParallelAxesData[] = [{
      name: 'Adrien',
      attributes: [{ name: 'strength', value: 5 }]
    }]

    expect(sanitizeData(unsanitized)).toEqual(expected)
  })

  it('getMaxAttributes', () => {
    const expected: Attribute[] = [
      { name: 'strength', value: 15 },
      { name: 'intelligence', value: 30 },
      { name: 'luck', value: 15 }
    ]
    expect(getMaxAttributes(data)).toEqual(expected)
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