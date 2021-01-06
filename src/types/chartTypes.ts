import { Datum } from './dataTypes'

export interface OnClickChart {
  data: Datum[],
  onClick: OnClickHandler
}

export interface OnSelectChart {
  data: Datum[],
  onSelect: OnSelectHandler
}

export type OnClickHandler = (clicked: Datum) => void
export type OnSelectHandler = (selected: Datum[]) => void