import { OnClickHandler, OnSelectionHandler } from './eventTypes'

// TODO: delete and use interfaces from chartTypes
export interface OnClickChart {
  data: Datum[],
  onClick: OnClickHandler
}

export interface OnSelectionChart {
  data: Datum[],
  onSelect: OnSelectionHandler
}

export interface DatumProps {
  datum: Datum
}

export interface Datum extends Coordinate {
  id: string, // unique identifier
  label?: string,
  isSelected?: boolean
}

export interface Coordinate {
  x: number,
  y: number
}

// Temporary interface for Stacked Bar Chart's test data
export interface StackedBarData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}