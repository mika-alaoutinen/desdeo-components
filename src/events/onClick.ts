import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'

export const setDataHandler = (datum: Datum, setData: SetData, data?: Datum[]): DatumProps => {
  const editedDatum = editSelected(datum)
  
  if (data) {
    // TODO: have to replace the old datum with the edited one
    setData(data.concat(editedDatum))
    console.log('new data', data)
  }
  
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