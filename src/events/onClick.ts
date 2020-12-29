import { Datum, DatumProps } from '../types/dataTypes'
import { Action, OnClickHandler, SetData } from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onClickHandler = (
  datum: Datum,
  data: Datum[],
  onClick: OnClickHandler
): DatumProps => {
  
  switch (onClick.type) {
    case 'REDUX':
      return reduxActionHandler(datum, onClick.function)
    case 'USE_STATE':
      return setDataHandler(datum, data, onClick.function)
    default:
      return { datum }
  }
}

const setDataHandler = (
  datum: Datum,
  data: Datum[],
  setData: SetData
): DatumProps => {
  const editedDatum = editSelected(datum)
  setData(updateData(editedDatum, data))
  return { datum: editedDatum }
}

const reduxActionHandler = (datum: Datum, action: Action): DatumProps => {
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

const updateData = (edited: Datum, data: Datum[]): Datum[] =>
  data.map(datum => datum.id === edited.id ? edited : datum)