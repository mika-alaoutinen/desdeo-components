import { Grouping } from '../types/chartTypes'
import {
  Attribute, Coordinate, CoordinateSet, DataSet, ParallelAxesData
} from '../types/dataTypes'
import { createId } from '../utils/utils'

const createCoordinates = (dataset: DataSet): Coordinate[] => {
  return []
}

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

export {
  createCoordinates, createAlternativeSets, createCriteriaSets,
  createParallelAxesData, mapData
}