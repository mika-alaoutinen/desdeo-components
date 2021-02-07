import { CoordinateSet } from 'types/dataTypes'

const HEIGHT_PER_ITEM = 10
const WIDTH_PER_ITEM = 12

const calculateHeight = (datasets: CoordinateSet[]): number =>
  itemsInDataset(datasets) * HEIGHT_PER_ITEM

const calculateWidth = (datasets: CoordinateSet[]): number =>
  itemsInDataset(datasets) * WIDTH_PER_ITEM

const itemsInDataset = (datasets: CoordinateSet[]): number =>
  datasets.flatMap(dataset => dataset.data).length

export { calculateHeight, calculateWidth }