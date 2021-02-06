import { CoordinateSet, DataSet } from 'types/dataTypes'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {
    const coordinates = data.map((value, i) => ({
      id: createId(label, i + 1),
      x: i + 1,
      y: value
    }))
    return { data: coordinates }
  })

const createCriteriaSets = (dataset: DataSet): CoordinateSet[] =>
  dataset[0].data.map((_, colIndex) => {
    const coordinates = dataset.map(({ data, label }, rowIndex) => ({
      id: createId(label, colIndex + 1),
      x: rowIndex + 1,
      y: data[colIndex]
    }))
    return { data: coordinates }
  })

// Utility functions
const createId = (label: string, n: number): string => {
  const hyphenated = label.toLowerCase().replace(/ /g, '-')
  return `${hyphenated}-${n}`
}

export {
  createAlternativeSets, createCriteriaSets
}