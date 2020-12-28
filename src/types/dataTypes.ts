// Add interfaces for different optimization methods here.

// The idea is to use either setData or reduxAction 
// to maintain the state of the components.
export interface DataProps {
  data: Datum[],
  eventHandler: EventHandler
}

export interface DatumProps {
  datum: Datum
}

export interface Datum extends Coordinate {
  id: string, // unique identifier
  label?: string,
  isSelected?: boolean
}

export interface Coordinate {
  x: number,
  y: number
}

// Event handling. TODO: Move to eventTypes.ts
export type EventHandler = UseStateCallback | ReduxActionCallback

interface UseStateCallback {
  type: 'USE_STATE',
  callback: SetData
}

interface ReduxActionCallback {
  type: 'REDUX',
  callback: ReduxActionData|ReduxActionDatum
}

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type ReduxAction = (event: Datum|Datum[]) => void

type ReduxActionData = (data: Datum[]) => void
type ReduxActionDatum = (data: Datum) => void