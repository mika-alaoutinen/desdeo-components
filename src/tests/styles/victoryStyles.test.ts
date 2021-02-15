import { Coordinate } from '../../types/dataTypes'

import {
  mapFillStyle, NOT_SELECTED_COLOR, SELECTED_COLOR
} from '../../styles/victoryStyles'

describe('Fill is based on if datum is selected or not', () => {
  it('should be black when unselected', () => {
    const fillColor = mapFillStyle(createCoordinateWithSelected(false))
    expect(fillColor).toBe(NOT_SELECTED_COLOR)
  })

  it('should be tomato when selected', () => {
    const fillColor = mapFillStyle(createCoordinateWithSelected(true))
    expect(fillColor).toBe(SELECTED_COLOR)
  })
})

const createCoordinateWithSelected = (isSelected: boolean): Coordinate => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1
})