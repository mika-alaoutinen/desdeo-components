import { Grouping } from '../types/chartTypes'
import { Coordinate, DataSet } from '../types/dataTypes'
import { range, replaceSpacesWithLineBreaks } from '../utils/utils'

const createCoordinateLabel = ({ id, y }: Coordinate): string =>
  `${id}:\n${y}`

const createDataLabels = (data: DataSet, grouping: Grouping): string[] =>
  grouping === 'alternatives'
    ? mapAlternativesLabels(data)
    : mapCriteriaNames(data)

// Utility functions
const mapAlternativesLabels = (data: DataSet): string[] =>
  range(countAlternatives(data))
    .map(n => `Alternative\n${n}`)

const mapCriteriaNames = (data: DataSet): string[] =>
  data
    .map(coordinate => coordinate.label)
    .map(replaceSpacesWithLineBreaks)

const countAlternatives = (data: DataSet): number => {
  return data
    .map(column => column.data.length)
    .reduce((max, current) => current > max ? current : max, 0)
}

export { createCoordinateLabel, createDataLabels }