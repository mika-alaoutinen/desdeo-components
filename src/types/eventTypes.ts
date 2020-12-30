import { Datum } from './dataTypes'

export type OnClickHandler = UseState|ReduxOnClick
export type OnSelectionHandler = UseState|ReduxOnSelect

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type OnClickAction = (datum: Datum) => void
export type OnSelectionAction = (data: Datum[]) => void

interface UseState {
  type: 'USE_STATE',
  function: SetData
}

interface ReduxOnClick {
  type: 'REDUX',
  function: OnClickAction
}

interface ReduxOnSelect {
  type: 'REDUX',
  function: OnSelectionAction
}