import { DataSet, CoordinateSet, Coordinate } from '../types/dataTypes'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data }) => {
    const coordinates: Coordinate[] = data.map(({ id, isSelected, value }, i) => ({
      id,
      x: i + 1,
      y: value,
      isSelected,
    }))

    return { data: coordinates }
  })

const createCriteriaSets = (dataset: DataSet): CoordinateSet[] => {
  if (!dataset.length) {
    return []
  }

  return dataset[0].data.map((_, colIndex) => {
    const coordinates: Coordinate[] = dataset.map(({ data }, rowIndex) => {
      const { id, isSelected, value: y } = data[colIndex]
      return {
        id,
        x: rowIndex + 1,
        y,
        isSelected,
      }
    })

    return { data: coordinates }
  })
}

const transpose = (nestedArrays: unknown[][]): unknown[][] =>
  nestedArrays[0].map((_, colIndex) => nestedArrays.map(row => row[colIndex]))

export { createAlternativeSets, createCriteriaSets, transpose }
