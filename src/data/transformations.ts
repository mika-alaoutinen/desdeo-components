import { Grouping } from '../types/chartTypes'
import {
  Attribute, Coordinate, CoordinateSet, DataSet, DataSetTuple, ParallelAxesData
} from '../types/dataTypes'
import { createId } from '../utils/utils'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {

    const coordinates: Coordinate[] = data.map(({ isSelected, value }, i) => ({
      id: createId(label, i + 1),
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

// Delete this
const createCoordinates = (tuple: DataSetTuple): Coordinate[] => {
  const { data: xData , label: xLabel } = tuple[0]
  const { data: yData , label: yLabel } = tuple[1]

  const length = Math.min(xData.length, yData.length)
  const range = [...Array(length).keys()]

  return range.map(n => ({
    id: createId(`${xLabel} ${yLabel}`, n + 1),
    x: xData[n].value,
    y: yData[n].value,
  }))
}

const createDataTableData = (dataset: DataSet): number[][] => {
  return !dataset.length
    ? []
    : transpose(dataset.map(d => d.data)) as number[][]
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
  createAlternativeSets, createCriteriaSets, createCoordinates,
  createDataTableData, createParallelAxesData, mapData
}