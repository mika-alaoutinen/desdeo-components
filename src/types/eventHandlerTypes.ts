import { Coordinate, Value } from './dataTypes'

type OnClickHandler = (clicked: Value) => void
type OnSelectHandler = (selected: Coordinate[]) => void
type OnSelectionClearedHandler = () => void

export type {
  OnClickHandler, OnSelectHandler, OnSelectionClearedHandler
}