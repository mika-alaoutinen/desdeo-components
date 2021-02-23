import { AttributeSet, Coordinate, Value } from './dataTypes'

type OnChangeHandler = (active: AttributeSet[]) => void
type OnClickHandler = (clicked: Value) => void
type OnCoordinateClick = (clicked: Coordinate) => void
type OnCoordinateSelect = (selected: Coordinate[]) => void
type OnSelectionClearedHandler = () => void

export type {
  OnChangeHandler,
  OnClickHandler,
  OnCoordinateClick,
  OnCoordinateSelect,
  OnSelectionClearedHandler,
}
