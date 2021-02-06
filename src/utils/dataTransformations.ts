import { Coordinate, CoordinateSet, DataSet } from 'types/dataTypes'

// Convert CSV dataset into CoordinateSet
const convertToCoordinates = (data: DataSet): CoordinateSet[] =>
  data.map(({ label, data }) => ({
    label,
    data: data.map((datum, i) => convertNumberToCoordinate(datum, i))
  }))

// Utility functions
const convertNumberToCoordinate = (n: number, index: number): Coordinate => ({
  id: n.toString(),
  x: index + 1,
  y: n
})

export { convertToCoordinates }