import { Grouping } from '../types/chartTypes'
import {
  Attribute, Coordinate, CoordinateSet, DataSet, DataSetTuple, ParallelAxesData
} from '../types/dataTypes'
import { createId } from '../utils/utils'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {

    const coordinates: Coordinate[] = data.map((value, i) => ({
      id: createId(label, i + 1),
      x: i + 1,
      y: value
    }))

    return { data: coordinates }
  })

const createCriteriaSets = (dataset: DataSet): CoordinateSet[] => {
  if (!dataset.length) {
    return []
  }

  return dataset[0].data.map((_, colIndex) => {

    const coordinates: Coordinate[] = dataset.map(({ data, label }, rowIndex) => ({
      id: createId(label, colIndex + 1),
      x: rowIndex + 1,
      y: data[colIndex],
    }))

    return { data: coordinates }
  })
}

const createCoordinates = (tuple: DataSetTuple): Coordinate[] => {
  const xAxisData = tuple[0].data
  const yAxisData = tuple[1].data
  const coordinates: Coordinate[] = []
  const length = Math.min(xAxisData.length, yAxisData.length)

  for (let i = 0; i < length; i++) {
    const coordinate: Coordinate = {
      id: createId('coordinate', i + 1),
      x: xAxisData[i],
      y: yAxisData[i]
    }
    coordinates.push(coordinate)
  }

  return coordinates
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
      id: createId(label, colIndex + 1),
      x: label.toLowerCase(),
      y: data[colIndex]
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