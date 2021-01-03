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
      reduxSelect(selected, onSelect.fn)
      break
    case 'USE_STATE':
      setSelectedData(selected, data, onSelect.fn)
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
      reduxUnselect(data, onSelect.fn)
      break
    case 'USE_STATE':
      clearSelectedData(data, onSelect.fn)
      break
    default:
      console.error('Invalid SelectionClearedHandler given!')
  }
}

const reduxSelect = (selected: Datum[], action: OnSelectAction): void =>
  reduxActionHandler(selected, true, action)

const reduxUnselect = (data: Datum[], action: OnSelectAction): void =>
  reduxActionHandler(data, false, action)

const reduxActionHandler = (
  selected: Datum[], isSelected: boolean, action: OnSelectAction
): void => {
  const edited = selected.map(datum => editSelected(datum, isSelected))
  action(edited)
}

const setSelectedData = (
  selected: Datum[], data: Datum[], setData: SetData
): void => {
  const selectedIDs = selected.map(datum => datum.id)
  const newData = data.map(datum => selectedIDs.includes(datum.id)
    ? editSelected(datum, true)
    : datum
  )
  setData(newData)
}

const clearSelectedData = (data: Datum[], setData: SetData): void => {
  const unselected = data.map(datum => editSelected(datum, false))
  setData(unselected)
}

const editSelected = (datum: Datum, isSelected: boolean): Datum => ({
  ...datum,
  isSelected
})