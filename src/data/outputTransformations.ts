import { Coordinate, Value } from '../types/dataTypes'

export const mapCoordinateToValue = (coordinate: Coordinate ): Value => {
  const { id, isSelected = false, y: value } = coordinate
  return { id, isSelected, value }
}