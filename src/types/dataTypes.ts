type Grouping = 'alternatives' | 'criteria'

// Represents a column in the example CSV
interface DataSet {
  label: string
  data: Value[]
}

interface Value {
  id: string
  isSelected: boolean
  value: number
}

interface AttributeSet {
  label: string
  attributes: Attribute[]
}

interface Attribute {
  id: string
  x: string
  y: number
}

interface CoordinateSet {
  data: Coordinate[]
  label?: string
}

interface Coordinate {
  id: string
  x: number
  y: number
  label?: string
  isSelected?: boolean
}

interface Filter {
  attribute: string
  range: [number, number]
}

interface MaxValue {
  label: string
  value: number
}

export type {
  Attribute,
  AttributeSet,
  Coordinate,
  CoordinateSet,
  DataSet,
  Filter,
  Grouping,
  MaxValue,
  Value,
}
