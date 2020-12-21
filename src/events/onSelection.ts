import { Datum, DatumProps } from '../types/dataTypes'

export const selectionHandler = (data: Datum[]): DatumProps[] => {
  data.forEach(({ x, y, label }) => console.log('x', x, 'y', y, 'label', label))
  return data.map(datum => editSelected(datum))
}

const editSelected = (datum: Datum): DatumProps => ({
  datum: {
    ...datum,
    isSelected: true
  }
})