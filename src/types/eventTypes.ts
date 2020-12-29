import { Datum } from './dataTypes'

export type OnClickHandler = UseState|ReduxAction

interface UseState {
  type: 'USE_STATE',
  function: SetData
}

interface ReduxAction {
  type: 'REDUX',
  function: Action
}

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type Action = (data: Datum) => void