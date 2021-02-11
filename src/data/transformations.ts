import { Coordinate, CoordinateSet, DataSet } from '../types/dataTypes'
import { createId } from '../utils/utilFunctions'

const createAlternativeSets = (dataset: DataSet): CoordinateSet[] =>
  dataset.map(({ data, label }) => {

    const coordinates: Coordinate[] = data.map((value, i) => ({
      id: createId(label, i + 1),
      x: i + 1,
      y: value
    }))

    return { data: coordinates }
  })

const createCriteriaSets = (dataset: DataSet): CoordinateSet[] =>
  dataset[0].data.map((_, colIndex) => {

    const coordinates: Coordinate[] = dataset.map(({ data, label }, rowIndex) => ({
      id: createId(label, colIndex + 1),
      x: rowIndex + 1,
      y: data[colIndex],
    }))

    return { data: coordinates }
  })

export {
  createAlternativeSets, createCriteriaSets
}