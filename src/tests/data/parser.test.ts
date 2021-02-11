import { Coordinate, DataSet } from '../../types/dataTypes'
import { testdata } from '../testdata'

import { countAlternatives, createCoordinateLabel } from '../../data/parser'

describe('Creates label text for a coordinate', () => {
  const coordinate: Coordinate = {
    id: 'test-id',
    x: 1,
    y: 2
  }

  it('label has ID and value', () => {
    expect(createCoordinateLabel(coordinate)).toBe('test-id:\n2')
  })
})

describe('countAlternatives finds the max number of alternatives across all datasets', () => {
  it('finds the max alternatives count', () => {
    expect(countAlternatives(testdata)).toBe(10)
  })

  it ('works with uneven datasets', () => {
    const data: DataSet = [
      { label: 'A', data: [ 6.042483 ] },
      { label: 'B', data: [ 3.17527, 3.410843 ] },
      { label: 'C', data: [ 6.090291, 6.887735, 2.992514 ] },
    ]
    expect(countAlternatives(data)).toBe(3)
  })
})