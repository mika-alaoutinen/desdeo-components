import { OnClickHandler } from './eventTypes'

export interface DataProps {
  data: Datum[],
  onClick: OnClickHandler
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