// Add interfaces for different optimization methods here.

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
  callback: ReduxAction
}

export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type ReduxAction = (data: Datum) => void