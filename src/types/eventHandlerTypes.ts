import { Coordinate, Value } from './dataTypes'

type OnClickHandler = (clicked: Value) => void
type OnCoordinateClick = (clicked: Coordinate) => void
type OnCoordinateSelect = (selected: Coordinate[]) => void
type OnSelectionClearedHandler = () => void

export type {
  OnClickHandler, OnCoordinateClick, OnCoordinateSelect, OnSelectionClearedHandler
}