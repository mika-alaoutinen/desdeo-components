import { Coordinate } from './dataTypes'

export interface OnClickChart {
  data: Coordinate[],
  onClick: OnClickHandler
}

export interface OnSelectChart {
  data: Coordinate[],
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

export type OnClickHandler = (clicked: Coordinate) => void
export type OnSelectHandler = (selected: Coordinate[]) => void
export type OnSelectionClearedHandler = () => void