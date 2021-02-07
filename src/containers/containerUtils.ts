import { CoordinateSet } from 'types/dataTypes'
import { Orientation } from 'types/layoutTypes'

const DEFAULT_DIMENSION = 350
const HEIGHT_PER_ITEM = 10
const WIDTH_PER_ITEM = 12

const calculateHeight = (datasets: CoordinateSet[], orientation?: Orientation): number =>
  orientation === 'vertical'
    ? DEFAULT_DIMENSION
    : itemsInDataset(datasets) * HEIGHT_PER_ITEM

const calculateWidth = (datasets: CoordinateSet[], orientation?: Orientation): number =>
  orientation === 'vertical'
    ? itemsInDataset(datasets) * WIDTH_PER_ITEM
    : DEFAULT_DIMENSION

const itemsInDataset = (datasets: CoordinateSet[]): number =>
  datasets.flatMap(dataset => dataset.data).length

export { calculateHeight, calculateWidth }