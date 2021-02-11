import { Coordinate } from '../../types/dataTypes'

import { createCoordinateLabel } from '../../data/dataParser'

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
