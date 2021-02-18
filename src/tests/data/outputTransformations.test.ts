import { Coordinate } from '../../types/dataTypes'

import { mapCoordinateToValue } from '../../data/outputTransformations'

describe('Maps a Coordinate into a Value', () => {
  it('maps properties correctly', () => {
    const value = mapCoordinateToValue(createCoordinate(true))
    expect(value).toEqual({ id: '1', isSelected: true, value: 2 })
  })

  it('maps isSelected into false if it is undefined', () => {
    const value = mapCoordinateToValue(createCoordinate())
    expect(value).toEqual({ id: '1', isSelected: false, value: 2 })
  })
})

const createCoordinate = (isSelected?: boolean): Coordinate => ({
  id: '1',
  x: 1,
  y: 2,
  isSelected,
})
