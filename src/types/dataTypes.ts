// Add interfaces for different optimization methods here.

export interface DataProps {
  data: Datum[],
  callback?: EventCallback
}

export interface DatumProps {
  datum: Datum
}

export interface Datum extends Coordinate {
  label?: string,
  isSelected?: boolean
}

export interface Coordinate {
  x: number,
  y: number
}

// Function types
export type EventCallback = (event: Datum) => void

// Example interfaces
export interface Iteration {
  variables: Variable[],
  parameters: Parameter[],
  iteration: number
}

export interface Parameter {
  parameter: number
}

export interface Variable {
  name: string,
  value: number
}