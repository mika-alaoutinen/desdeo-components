import { CoordinateSet } from '../types/dataTypes'
import { Orientation } from '../types/layoutTypes'

const DEFAULT_DIMENSION = 350
const HEIGHT_PER_ITEM = 10
const WIDTH_PER_ITEM = 12

const calculateHeight = (datasets: CoordinateSet[], orientation: Orientation): number => {
  if (orientation === 'vertical') {
    return DEFAULT_DIMENSION
  }

  const height = itemsInDataset(datasets) * HEIGHT_PER_ITEM
  return valueOrDefault(height)
}

const calculateWidth = (datasets: CoordinateSet[], orientation: Orientation): number => {
  if (orientation === 'horizontal') {
    return DEFAULT_DIMENSION
  }

  const width = itemsInDataset(datasets) * WIDTH_PER_ITEM
  return valueOrDefault(width)
}

const itemsInDataset = (datasets: CoordinateSet[]): number =>
  datasets.flatMap(dataset => dataset.data).length

const valueOrDefault = (value: number): number =>
  Math.max(value, DEFAULT_DIMENSION)

export { calculateHeight, calculateWidth }