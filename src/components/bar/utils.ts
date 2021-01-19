import { CoordinateSet } from '../../types/dataTypes'

export const getDatasetLength = (datasets: CoordinateSet[]): number =>
  datasets.map(dataset => dataset.data).length

// Need to use regex with replace because Node.js has no implementation for replaceAll...
export const createAxisLabels = (datasets: CoordinateSet[]): string[] =>
  datasets
    .map(({ label }, i) => label ? label : `Label ${i + 1}`)
    .map(label => label.replace(/ /g, '\n'))

export const createIntegerArray = (max: number): number[] =>
  max < 0 ? [] : createRange(max)

// Utility functions
const createRange = (max: number): number[] => {
  const numbersFromZero = [...Array(max).keys()]
  return numbersFromZero.map(n => n + 1)
}