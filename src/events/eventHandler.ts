import { Datum, DatumProps, ReduxAction, SetData } from '../types/dataTypes'
import { setDataHandler, reduxActionHandler } from './onClick'

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
  
  if (setData) {
    return setDataHandler(datum, data, setData)
  }

  if (reduxAction) {
    return reduxActionHandler(datum, reduxAction)
  }

  return { datum }
}