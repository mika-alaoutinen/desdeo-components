import { Datum } from './dataTypes'

export interface OnClickChart {
  data: Datum[],
  onClick: OnClickHandler
}

export interface OnSelectChart {
  data: Datum[],
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

export type OnClickHandler = (clicked: Datum) => void
export type OnSelectHandler = (selected: Datum[]) => void
export type OnSelectionClearedHandler = () => void