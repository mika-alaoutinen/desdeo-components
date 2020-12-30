import { Datum } from './dataTypes'

export type OnClickHandler = UseState|ReduxOnClick
export type OnSelectHandler = UseState|ReduxOnSelect

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type OnClickAction = (datum: Datum) => void
export type OnSelectAction = (data: Datum[]) => void

interface UseState {
  type: 'USE_STATE',
  fn: SetData
}

interface ReduxOnClick {
  type: 'REDUX',
  fn: OnClickAction
}

interface ReduxOnSelect {
  type: 'REDUX',
  fn: OnSelectAction
}