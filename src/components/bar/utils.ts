import { CoordinateSet, StackedBarData } from '../../types/dataTypes'

export const createTickValuesForStackedBars = (data: StackedBarData[]): number[] =>
  createTickValues(getMaxLengthOfData(data))

export const findMaxValue = (datasets: CoordinateSet[]): number => {
  const values = datasets
    .flatMap(dataset => dataset.data)
    .map(data => data.y)

  return Math.max(...values)
}

export const createTickValues = (max: number): number[] => {
  const numbersFromZero = [...Array(max).keys()]
  return numbersFromZero.map(n => n + 1)
}

// Utility functions
const getMaxLengthOfData = (data: StackedBarData[]): number => {
  const lengthsOfData = data
    .map(yearRow => yearRow.data)
    .map(dataRow => dataRow.length)

  return Math.max.apply(0, lengthsOfData)
}