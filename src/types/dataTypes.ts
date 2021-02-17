type DataSet = DataColumn[]
type Grouping = 'alternatives' | 'criteria'

// Represents a column in the example CSV
interface DataColumn {
  label: string,
  data: Value[]
}

interface Value {
  id: string,
  isSelected: boolean,
  value: number
}

interface CoordinateSet {
  data: Coordinate[],
  label?: string
}

interface Coordinate {
  id: string,
  x: number,
  y: number,
  label?: string,
  isSelected?: boolean
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
  Attribute, Coordinate, CoordinateSet, DataSet,
  DataColumn, Filter, Grouping, ParallelAxesData, Value
}