import { parallelAxesData } from '../../testdata'
import { NormalizedData } from '../../../types/dataTypes'
import { normalizeData } from '../../../components/parallelAxes/dataTransformations'

describe('Data should be normalized', () => {
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

    expect(normalizeData(parallelAxesData)).toEqual(expected)
  })
})