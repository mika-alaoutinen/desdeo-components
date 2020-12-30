import { Datum } from '../types/dataTypes'
import { Action, OnClickHandler, SetData } from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onSelectionHandler = (
  selected: Datum[], data: Datum[], onClick: OnClickHandler
): void => {

  switch (onClick.type) {
    case 'REDUX':
      reduxActionHandler(selected, true, onClick.function)
      break
    case 'USE_STATE':
      setDataHandler(selected, data, onClick.function)
      break
    default:
      console.error('Invalid OnSelectionHandler given!')
  }
}
  
/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const selectionClearedHandler = (
  data: Datum[], onClick: OnClickHandler
): void => {
  
  switch (onClick.type) {
    case 'REDUX':
      reduxActionHandler(data, false, onClick.function)
      break
    case 'USE_STATE':
      clearSelectedData(data, onClick.function)
      break
    default:
      console.error('Invalid SelectionClearedHandler given!')
  }
}

const reduxActionHandler = (selected: Datum[], isSelected: boolean, action: Action): void => {
  const edited = editSelected(selected, isSelected)
  edited.forEach(datum => action(datum))
}

const setDataHandler = (selected: Datum[], data: Datum[], setData: SetData): void => {
  const edited = editSelected(selected, true)
  const newData = updateData(edited, data)
  setData(newData)
}

const clearSelectedData = (data: Datum[], setData: SetData): void => {
  const cleared = editSelected(data, false)
  setData(cleared)
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