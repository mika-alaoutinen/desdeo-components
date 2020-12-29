import { Datum } from '../types/dataTypes'
import { Action, OnClickHandler, SetData } from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onSelectionHandler = (
  selected: Datum[],
  data: Datum[],
  onClick: OnClickHandler
): Datum[] => {

  switch (onClick.type) {
    case 'REDUX':
      return reduxActionHandler(selected, true, onClick.function)
    case 'USE_STATE':
      return setDataHandler(selected, data, onClick.function)
    default:
      return data
  }
}
  
/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const selectionClearedHandler = (
  data: Datum[],
  onClick: OnClickHandler
): Datum[] => {

  switch (onClick.type) {
    case 'REDUX':
      return reduxActionHandler(data, false, onClick.function)
    case 'USE_STATE':
      return clearSelectedData(data, onClick.function)
    default:
      return data
  }
}

const reduxActionHandler = (
  selected: Datum[],
  isSelected: boolean,
  action: Action
): Datum[] => {
  const edited = editSelected(selected, isSelected)
  edited.forEach(datum => action(datum))
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