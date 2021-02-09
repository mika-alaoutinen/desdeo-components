// A dataset can have any number of columns
type DataSet = DataColumn[]

// Represents a column in the example CSV
interface DataColumn {
  label: string,
  data: number[]
}

interface Coordinate {
  id: string,
  x: number,
  y: number,
  label?: string,
  isSelected?: boolean
}

interface CoordinateSet {
  data: Coordinate[]
}

interface NormalizedData {
  name: string,
  data: Attribute[]
}

interface ParallelAxesData {
  name: string,
  attributes: Attribute[]
}

interface Attribute {
  x: string,
  y: number
}

interface Filter {
  attribute: string,
  range: [ number, number ]
}

export type {
  DataColumn, DataSet, Coordinate, CoordinateSet,
  NormalizedData, ParallelAxesData, Attribute, Filter
}