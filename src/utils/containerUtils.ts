import { CoordinateSet } from 'types/dataTypes'

const calculateHeight = (datasets: CoordinateSet[]): number => {
  // Calculate how high a chart should be based on the dataset
  console.log(datasets)
  return 500
}

export { calculateHeight }