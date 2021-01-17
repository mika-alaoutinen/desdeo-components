export interface Coordinate {
  id: string, // unique identifier
  x: number,
  y: number,
  label?: string,
  isSelected?: boolean
}

export interface NormalizedData {
  name: string,
  data: TextualData[]
}

export interface TextualData {
  x: string,
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

export interface Filter {
  attribute: string,
  range: [ number, number ]
}

export interface StackedBarData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}