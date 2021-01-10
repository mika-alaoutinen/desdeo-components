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

// For example Strength: 1
export type Attribute = {
  [ key: string ]: number
}

export interface StackedBarData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}