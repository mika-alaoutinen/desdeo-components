import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'

/**
 * Used to direct the function callback to either a
 * React useState handler or a Redux action handler.
 * If neither callback function is defined, returns
 * the given data back as is.
 * @param datum @type {Datum}
 * @param data @type {Datum[]}
 * @param setData @type {SetData}
 * @param reduxAction @type {ReduxAction}
 * @returns datumProps @type {DatumProps}
 */
export const eventHandler = (
  datum: Datum,
  data: Datum[],
  setData?: SetData,
  reduxAction?: ReduxAction
): DatumProps => {
  
  if (reduxAction) {
    return reduxActionHandler(datum, reduxAction)
  }
  
  if (setData) {
    return setDataHandler(datum, data, setData)
  }

  return { datum }
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