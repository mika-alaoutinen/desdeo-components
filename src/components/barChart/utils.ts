import { Datum } from '../../types/dataTypes'
import { BarPropsExt } from '../../types/extendedTypes'
import { TestData } from './data'

export const createTickValues = (data: TestData[]): number[] => {
  const maxLength = getMaxLengthOfData(data)
  const numbersFromZero = [...Array(maxLength).keys()]
  return numbersFromZero.map(n => n + 1)
}

export const updateSelected = (props: BarPropsExt): BarPropsExt => ({
  ...props,
  datum: setIsSelected(props.datum)
})

const getMaxLengthOfData = (data: TestData[]): number => {
  const lengthsOfData = data
    .map(yearRow => yearRow.data)
    .map(dataRow => dataRow.length)

  return Math.max.apply(0, lengthsOfData)
}

const setIsSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? {
      ...datum,
      isSelected: true
    }
    : {
      ...datum,
      isSelected: !datum.isSelected
    }