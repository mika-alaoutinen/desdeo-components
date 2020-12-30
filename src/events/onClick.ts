import { Datum } from '../types/dataTypes'
import { OnClickAction, OnClickHandler, SetData } from '../types/eventTypes'

/*
 * Used to direct the function callback to either a React useState handler
 * or a Redux action handler. If neither callback function is defined, returns
 * the given data back as is.
 */
export const onClickHandler = (
  clicked: Datum, data: Datum[], onClick: OnClickHandler
): void => {
  
  switch (onClick.type) {
    case 'REDUX':
      reduxActionHandler(clicked, onClick.fn)
      break
    case 'USE_STATE':
      setDataHandler(clicked, data, onClick.fn)
      break
    default:
      console.error('Invalid OnClickHandler given!')
  }
}

const setDataHandler = (datum: Datum, data: Datum[], setData: SetData): void => {
  const editedDatum = editSelected(datum)
  setData(updateData(editedDatum, data))
}

const reduxActionHandler = (datum: Datum, action: OnClickAction): void => {
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