import { Datum } from './dataTypes'
import { OnClickHandler, OnSelectionHandler } from './eventTypes'

export interface OnClickChart {
  data: Datum[],
  onClick: OnClickHandler
}

export interface OnSelectionChart {
  data: Datum[],
  onSelect: OnSelectionHandler
}