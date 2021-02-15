type DataSet = DataColumn[]

type DataSetTuple = [ DataColumn, DataColumn ]

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

interface ParallelAxesData {
  label: string,
  attributes: Attribute[]
}

interface Attribute {
  id: string,
  x: string,
  y: number
}

interface Filter {
  attribute: string,
  range: [ number, number ]
}

export type {
  DataSet, DataSetTuple, Coordinate, CoordinateSet,
  ParallelAxesData, Attribute, Filter
}