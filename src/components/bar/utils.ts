import { CoordinateSet, StackedBarData } from '../../types/dataTypes'

// Need to use regex with replace because Node.js has no implementation for replaceAll...
export const createAxisLabels = (datasets: CoordinateSet[]): string[] =>
  datasets
    .map(({ label }, i) => label ? label : `Label ${i + 1}`)
    .map(label => label.replace(/ /g, '\n'))

export const createIntegerArray = (max: number): number[] =>
  max < 0 ? [] : createRange(max)

export const createTickValuesForStackedBars = (data: StackedBarData[]): number[] =>
  createIntegerArray(getMaxLengthOfData(data))

// Utility functions
const createRange = (max: number): number[] => {
  const numbersFromZero = [...Array(max).keys()]
  return numbersFromZero.map(n => n + 1)
}

const getMaxLengthOfData = (data: StackedBarData[]): number => {
  const lengthsOfData = data
    .map(yearRow => yearRow.data)
    .map(dataRow => dataRow.length)

  return Math.max.apply(0, lengthsOfData)
}