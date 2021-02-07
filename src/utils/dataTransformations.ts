import { Coordinate, CoordinateSet, DataSet } from 'types/dataTypes'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {
    const coordinates: Coordinate[] = data.map((value, i) => {
      const x = i + 1
      const id = createId(label, x)

      return {
        id,
        x,
        y: value,
        label: createLabel(id, value)
      }
    })

    return { data: coordinates }
  })

const createCriteriaSets = (dataset: DataSet): CoordinateSet[] =>
  dataset[0].data.map((_, colIndex) => {
    const coordinates = dataset.map(({ data, label }, rowIndex) => {
      const id = createId(label, colIndex + 1)
      const x = rowIndex + 1
      const y = data[colIndex]

      return {
        id,
        x,
        y,
        label: createLabel(id, y)
      }
    })

    return { data: coordinates }
  })

// Utility functions
const createId = (label: string, n: number): string => {
  const hyphenated = label.toLowerCase().replace(/ /g, '-')
  return `${hyphenated}-${n}`
}

const createLabel = (id: string, value: number): string =>
  `${id}:\n${value}`

export {
  createAlternativeSets, createCriteriaSets
}