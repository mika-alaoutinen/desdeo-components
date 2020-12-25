import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'

export const setDataHandler = (
  datum: Datum,
  data: Datum[],
  setData: SetData
): DatumProps => {

  const editedDatum = editSelected(datum)
  setData(replaceDatum(editedDatum, data))
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

const replaceDatum = (edited: Datum, data: Datum[]): Datum[] =>
  data.map(datum => datum.id === edited.id ? edited : datum)