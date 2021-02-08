// A dataset can have any number of columns
export type DataSet = DataColumn[]

// Represents a column in the example CSV
export interface DataColumn {
  label: string,
  data: number[]
}

// Should work to get rid of these in favor of a universal data shape
export interface Coordinate {
  id: string, // unique identifier
  x: number,
  y: number,
  label?: string,
  isSelected?: boolean
}

export interface CoordinateSet {
  data: Coordinate[]
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