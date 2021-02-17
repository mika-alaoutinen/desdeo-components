import { Coordinate, Value } from '../types/dataTypes'

export const mapCoordinateToValue = ({
  id, isSelected = false, y: value }: Coordinate
): Value => ({
  id, isSelected, value
})