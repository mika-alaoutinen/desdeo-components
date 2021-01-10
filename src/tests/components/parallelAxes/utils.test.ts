import { Attribute, ParallelAxesData } from '../../../types/dataTypes'

import { getAttributeKeys, getMaxAttributes } from '../../../components/parallelAxes/utils'

const data: ParallelAxesData[] = [
  {
    name: 'Adrien',
    attributes: [
      { strength: 5 },
      { intelligence: 10 },
    ]
  },
  {
    name: 'Brice',
    attributes: [
      { strength: 10 },
      { intelligence: 6 },
    ]
  },
  {
    name: 'Charlie',
    attributes: [
      { Strength: 10 },
      { Luck: 3 },
    ]
  },
]

describe('testing', () => {
  // it('does not work', () => {
  //   const expected: Attribute[] = [
  //     { strength: 10 },
  //     { intelligence: 10 }
  //   ]
  //   const maxAttributes = getMaxAttributes(data)
  //   expect(maxAttributes).toEqual(expected)
  // })

  it('getAttributeKeys', () => {
    const keys = getAttributeKeys(data)
    expect(keys).toEqual([ 'strength', 'intelligence', 'luck' ])
  })
})