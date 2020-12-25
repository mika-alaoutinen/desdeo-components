import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'
import { setDataHandler, reduxActionHandler } from './onClick'

export const eventHandler = (
  datum: Datum,
  setData?: SetData,
  reduxAction?: ReduxAction
): DatumProps => {
  
  if (setData) {
    return setDataHandler(datum, setData)
  }

  if (reduxAction) {
    return reduxActionHandler(datum, reduxAction)
  }

  return { datum } // default output
}