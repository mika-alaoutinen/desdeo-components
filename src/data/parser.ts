import { Grouping } from '../types/chartTypes'
import { Coordinate, CoordinateSet, DataSet } from '../types/dataTypes'
import { createAlternativeSets, createCriteriaSets } from './transformations'
import { range, replaceSpacesWithLineBreaks } from '../utils/utils'

const createCoordinateLabel = ({ id, y }: Coordinate): string =>
  `${id}:\n${y}`

const createDataLabels = (data: DataSet, grouping: Grouping): string[] =>
  grouping === 'alternatives'
    ? mapAlternativesLabels(data)
    : mapCriteriaNames(data)

const mapAlternativesLabels = (data: DataSet): string[] =>
  range(countAlternatives(data))
    .map(n => `Alternative\n${n}`)

const countAlternatives = (data: DataSet): number => {
  return data
    .map(column => column.data.length)
    .reduce((max, current) => current > max ? current : max, 0)
}

const mapCriteriaNames = (data: DataSet): string[] =>
  data
    .map(coordinate => coordinate.label)
    .map(replaceSpacesWithLineBreaks)

const mapData = (data: DataSet, grouping: Grouping): CoordinateSet[] =>
  grouping === 'alternatives'
    ? createAlternativeSets(data)
    : createCriteriaSets(data)

export {
  countAlternatives, createCoordinateLabel, createDataLabels, mapData
}