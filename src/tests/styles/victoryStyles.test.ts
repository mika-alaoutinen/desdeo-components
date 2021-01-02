import {
  mapFillStyle, mapOpacityStyle, OPAQUE, NOT_SELECTED_COLOR, SELECTED_COLOR, SOLID,
} from '../../styles/victoryStyles'

import { Datum } from '../../types/dataTypes'

describe('Fill is based on if datum is selected or not', () => {
  it('should be black when unselected', () => {
    const fillColor = mapFillStyle(createDatumWithSelected(false))
    expect(fillColor).toBe(NOT_SELECTED_COLOR)
  })
  
  it('should be tomato when selected', () => {
    const fillColor = mapFillStyle(createDatumWithSelected(true))
    expect(fillColor).toBe(SELECTED_COLOR)
  })
})

// This is an example implementation
describe('Opacity is based on y coordinate value', () => {
  it('should be solid', () => {
    const opacity = mapOpacityStyle(createDatumWithValues(10, 10))
    expect(opacity).toBe(SOLID)
  })

  it('should be opaque', () => {
    const opacity = mapOpacityStyle(createDatumWithValues(10, 7))
    expect(opacity).toBe(OPAQUE)
  })
})

// Utility functions:
const createDatumWithSelected = (isSelected: boolean): Datum => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1
})

const createDatumWithValues = (x: number, y: number): Datum => ({
  id: '123',
  label: 'A',
  isSelected: false,
  x,
  y
})

