import { Datum, DatumProps, EventHandler, ReduxAction, SetData } from '../types/dataTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onClickHandler = (
  datum: Datum,
  data: Datum[],
  eventHandler: EventHandler
): DatumProps => {
  
  switch (eventHandler.type) {
    case 'REDUX':
      return reduxActionHandler(datum, eventHandler.callback)
    case 'USE_STATE':
      return setDataHandler(datum, data, eventHandler.callback)
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

const reduxActionHandler = (datum: Datum, action: ReduxAction): DatumProps => {
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