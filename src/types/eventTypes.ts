import { Datum } from './dataTypes'

export type EventHandler = UseStateCallback|ReduxActionCallback

interface UseStateCallback {
  type: 'USE_STATE',
  callback: SetData
}

interface ReduxActionCallback {
  type: 'REDUX',
  callback: ReduxAction
}

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type ReduxAction = (data: Datum) => void