import { TestData } from './data'

export const createTickValues = (data: TestData[]): number[] => {
  const maxLength = getMaxLengthOfData(data)
  const numbersFromZero = [...Array(maxLength).keys()]
  return numbersFromZero.map(n => n + 1)
}

const getMaxLengthOfData = (data: TestData[]): number => {
  const lengthsOfData = data
    .map(yearRow => yearRow.data)
    .map(dataRow => dataRow.length)

  return Math.max.apply(0, lengthsOfData)
}