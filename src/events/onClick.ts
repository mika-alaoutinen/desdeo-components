import { Datum } from '../types/dataTypes'
import { Action, OnClickHandler, SetData } from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onClickHandler = (
  datum: Datum, data: Datum[], onClick: OnClickHandler
): void => {
  
  switch (onClick.type) {
    case 'REDUX':
      reduxActionHandler(datum, onClick.function)
      break
    case 'USE_STATE':
      setDataHandler(datum, data, onClick.function)
      break
    default:
      console.error('Invalid OnClickHandler given!')
  }
}

const setDataHandler = (datum: Datum, data: Datum[], setData: SetData): void => {
  const editedDatum = editSelected(datum)
  setData(updateData(editedDatum, data))
}

const reduxActionHandler = (datum: Datum, action: Action): void => {
  const editedDatum = editSelected(datum)
  action(editedDatum)
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