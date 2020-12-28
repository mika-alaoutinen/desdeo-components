// Add interfaces for different optimization methods here.

// The idea is to use either setData or reduxAction 
// to maintain the state of the components.
export interface DataProps {
  data: Datum[],
  setData?: SetData,
  reduxAction?: ReduxAction
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

// Function types
export type SetData = React.Dispatch<React.SetStateAction<Datum[]>>
export type ReduxAction = (event: Datum|Datum[]) => void