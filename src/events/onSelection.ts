import { Datum, ReduxAction, SetData } from '../types/dataTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onSelectionHandler = (
  selected: Datum[],
  data: Datum[],
  setData?: SetData,
  action?: ReduxAction
): Datum[] => {
  if (action) {
    return reduxActionHandler(selected, true, action)
  }
  if (setData) {
    return setDataHandler(selected, data, setData)
  }
  return data
}

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const selectionClearedHandler = (
  data: Datum[],
  setData?: SetData,
  action?: ReduxAction
): Datum[] => {
  if (action) {
    return reduxActionHandler(data, false, action)
  }
  if (setData) {
    return clearSelectedData(data, setData)
  }
  return data
}

const reduxActionHandler = (
  selected: Datum[],
  isSelected: boolean,
  action: ReduxAction
): Datum[] => {
  const edited = editSelected(selected, isSelected)
  action(edited)
  return edited
}

const setDataHandler = (
  selected: Datum[],
  data: Datum[],
  setData: SetData
): Datum[] => {
  const edited = editSelected(selected, true)
  const newData = updateData(edited, data)
  setData(newData)
  return newData
}

const clearSelectedData = (data: Datum[], setData: SetData): Datum[] => {
  const cleared = editSelected(data, false)
  setData(cleared)
  return cleared
}

const editSelected = (data: Datum[], isSelected: boolean): Datum[] =>
  data.map(datum => ({
    ...datum,
    isSelected
  }))

const updateData = (edited: Datum[], data: Datum[]): Datum[] => {
  const editedIDs = edited.map(datum => datum.id)
  return data
    .filter(datum => !editedIDs.includes(datum.id))
    .concat(edited)
}