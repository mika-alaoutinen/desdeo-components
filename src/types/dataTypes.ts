import { EventHandler } from './eventTypes'

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