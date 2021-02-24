import { Coordinate } from '../../types/dataTypes'

import { mapFillStyle, mapOpacity } from '../../styles/victoryStyles'

describe('Fill is based on if datum is selected or not', () => {
  it('should be black when unselected', () => {
    const fillColor = mapFillStyle(createCoordinate(false))
    expect(fillColor).toBe('black')
  })

  it('should be tomato when selected', () => {
    const fillColor = mapFillStyle(createCoordinate(true))
    expect(fillColor).toBe('tomato')
  })
})

describe('Opacity is based on if datum is selected or not', () => {
  it('should be 50% transparent when unselected', () => {
    const opacity = mapOpacity(createCoordinate(false))
    expect(opacity).toBe(0.5)
  })

  it('should be completely opaque when selected', () => {
    const opacity = mapOpacity(createCoordinate(true))
    expect(opacity).toBe(1)
  })
})

const createCoordinate = (isSelected: boolean): Coordinate => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1,
})
