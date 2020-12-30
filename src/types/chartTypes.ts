import { Datum } from './dataTypes'
import { OnClickHandler, OnSelectHandler } from './eventTypes'

export interface OnClickChart {
  data: Datum[],
  onClick: OnClickHandler
}

export interface OnSelectChart {
  data: Datum[],
  onSelect: OnSelectHandler
}