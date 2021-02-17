import { Coordinate } from './dataTypes'

type OnClickHandler = (clicked: Coordinate) => void
type OnSelectHandler = (selected: Coordinate[]) => void
type OnSelectionClearedHandler = () => void

export type {
  OnClickHandler, OnSelectHandler, OnSelectionClearedHandler
}