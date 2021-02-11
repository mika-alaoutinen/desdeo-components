import { data } from '../../tests/components/bar/barData'
import { Grouping } from '../../types/chartTypes'
import { Coordinate, CoordinateSet, DataSet } from '../../types/dataTypes'
import { createAlternativeSets, createCriteriaSets } from '../../utils/dataTransformations'

const createBarLabel = ({ id, y }: Coordinate): string =>
  `${id}:\n${y}`

const createLabels = (data: DataSet, grouping: Grouping): string[] => {
  return []
}

const mapData = (data: DataSet, grouping: Grouping): CoordinateSet[] =>
  grouping === 'alternatives'
    ? createAlternativeSets(data)
    : createCriteriaSets(data)

export { createBarLabel, createLabels, mapData }