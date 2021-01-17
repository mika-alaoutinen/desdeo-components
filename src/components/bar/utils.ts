import { CoordinateSet, StackedBarData } from '../../types/dataTypes'

export const createTickValues = (data: StackedBarData[]): number[] => {
  const maxLength = getMaxLengthOfData(data)
  const numbersFromZero = [...Array(maxLength).keys()]
  return numbersFromZero.map(n => n + 1)
}

const getMaxLengthOfData = (data: StackedBarData[]): number => {
  const lengthsOfData = data
    .map(yearRow => yearRow.data)
    .map(dataRow => dataRow.length)

  return Math.max.apply(0, lengthsOfData)
}

export const createKey = (label: string|undefined, index: number): string =>
  label ? label : index.toString()

export const findMaxValue = (datasets: CoordinateSet[]): number => {
  const values = datasets
    .flatMap(dataset => dataset.data)
    .map(data => data.y)

  return Math.max(...values)
}