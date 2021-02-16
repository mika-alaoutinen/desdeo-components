import { Grouping } from '../types/chartTypes'
import {
  Attribute, Coordinate, CoordinateSet, DataSet, ParallelAxesData, Value
} from '../types/dataTypes'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data }) => {

    const coordinates: Coordinate[] = data.map(({ id, isSelected, value }, i) => ({
      id,
      x: i + 1,
      y: value,
      isSelected
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
        isSelected
      }
    })

    return { data: coordinates }
  })
}

const createDataTableData = (dataset: DataSet): Value[][] => {
  return !dataset.length
    ? []
    : transpose(dataset.map(column => column.data)) as Value[][]
}

const createParallelAxesData = (dataset: DataSet): ParallelAxesData[] => {
  if (!dataset.length) {
    return []
  }

  return dataset[0].data.map((_, colIndex) => {
    const attributes: Attribute[] = dataset.map(({ data, label }) => ({
      id: data[colIndex].id,
      x: label.toLowerCase(),
      y: data[colIndex].value,
    }))

    return {
      attributes,
      label: `Alternative ${colIndex + 1}`
    }
  })
}

const mapData = (data: DataSet, grouping: Grouping): CoordinateSet[] =>
  grouping === 'alternatives'
    ? createAlternativeSets(data)
    : createCriteriaSets(data)

const transpose = (nestedArrays: unknown[][]): unknown[][] =>
  nestedArrays[0].map((_, colIndex) =>
    nestedArrays.map(row => row[colIndex]))

export {
  createAlternativeSets, createCriteriaSets,
  createDataTableData, createParallelAxesData, mapData
}