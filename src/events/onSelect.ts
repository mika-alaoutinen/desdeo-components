import { Datum } from '../types/dataTypes'
import {
  OnSelectAction, OnSelectHandler, SetData
} from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onSelectHandler = (
  selected: Datum[], data: Datum[], onSelect: OnSelectHandler
): void => {

  switch (onSelect.type) {
    case 'REDUX':
      reduxActionHandler(selected, true, onSelect.function)
      break
    case 'USE_STATE':
      setDataHandler(selected, data, onSelect.function)
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
  data: Datum[], onSelect: OnSelectHandler
): void => {
  
  switch (onSelect.type) {
    case 'REDUX':
      reduxActionHandler(data, false, onSelect.function)
      break
    case 'USE_STATE':
      clearSelectedData(data, onSelect.function)
      break
    default:
      console.error('Invalid SelectionClearedHandler given!')
  }
}

const reduxActionHandler = (
  selected: Datum[], isSelected: boolean, action: OnSelectAction
): void => {
  const edited = editSelected(selected, isSelected)
  action(edited)
}

const setDataHandler = (
  selected: Datum[], data: Datum[], setData: SetData
): void => {
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