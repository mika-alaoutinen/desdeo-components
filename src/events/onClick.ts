import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'

export const setDataHandler = (datum: Datum, setData: SetData): DatumProps => {
  const editedDatum = editSelected(datum)
  setData([editedDatum])
  return { datum: editedDatum }
}

export const reduxActionHandler = (datum: Datum, action: ReduxAction): DatumProps => {
  const editedDatum = editSelected(datum)
  action(editedDatum)
  return { datum: editedDatum }
}

const editSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? {
      ...datum,
      isSelected: true
    }
    : {
      ...datum,
      isSelected: !datum.isSelected
    }