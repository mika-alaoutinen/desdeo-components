import { CoordinateSet, DataSet } from '../../types/dataTypes'

const getDatasetLengthCSV = (dataset: DataSet): number =>
  dataset.map(dataset => dataset.data).length

const createAxisLabelsCSV = (dataset: DataSet): string[] =>
  dataset
    .map(({ label }, i) => label ? label : `Label ${i + 1}`)
    .map(label => label.replace(/ /g, '\n'))

const getDatasetLength = (datasets: CoordinateSet[]): number =>
  datasets.map(dataset => dataset.data).length

// Need to use regex with replace because Node.js has no implementation for replaceAll...
const createAxisLabels = (datasets: CoordinateSet[]): string[] =>
  datasets
    .map(({ label }, i) => label ? label : `Label ${i + 1}`)
    .map(label => label.replace(/ /g, '\n'))

const createIntegerArray = (max: number): number[] =>
  max < 0 ? [] : createRange(max)

// Utility functions
const createRange = (max: number): number[] => {
  const numbersFromZero = [...Array(max).keys()]
  return numbersFromZero.map(n => n + 1)
}

export {
  getDatasetLengthCSV, createAxisLabelsCSV,
  getDatasetLength, createAxisLabels, createIntegerArray
}