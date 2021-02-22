import { Coordinate, Value } from './dataTypes'

// Maybe it would be enough to emit datum IDs in callback?
// i.e. OnClickHandler = (clicked: string) => void
type OnChangeHandler = (activeIDs: string[]) => void
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
