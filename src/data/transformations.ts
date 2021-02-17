import { createAlternativeSets, createCriteriaSets } from './transformationUtils'
import { Grouping } from '../types/dataTypes'
import {
  Attribute, Coordinate, CoordinateSet, DataColumn, DataSet, ParallelAxesData, Value
} from '../types/dataTypes'

const createBarData = ({ data, label }: DataColumn): CoordinateSet => {
  const coordinates = data.map((value, x) => {
    const { id, isSelected, value: y } = value
    return { id, isSelected, x: x + 1, y }
  })

  return {
    data: coordinates,
    label
  }
}

const createCoordinateSets = (data: DataSet, grouping: Grouping): CoordinateSet[] =>
  grouping === 'alternatives'
    ? createAlternativeSets(data)
    : createCriteriaSets(data)

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

const mapCoordinateToValue = ({
  id, isSelected = false, y: value }: Coordinate
): Value => ({
  id, isSelected, value
})

const transpose = (nestedArrays: unknown[][]): unknown[][] =>
  nestedArrays[0].map((_, colIndex) =>
    nestedArrays.map(row => row[colIndex]))

export {
  createAlternativeSets, createBarData, createCriteriaSets,
  createDataTableData, createParallelAxesData, mapCoordinateToValue, createCoordinateSets
}