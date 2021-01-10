export interface Datum extends Coordinate {
  id: string, // unique identifier
  label?: string,
  isSelected?: boolean
}

export interface Coordinate {
  x: number,
  y: number
}

// Temporary interfaces for test data
export interface ParallelAxesData {
  name: string,
  attributes: Attribute[]
}

export interface Attribute {
  name: string,
  value: number
}

export interface StackedBarData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}