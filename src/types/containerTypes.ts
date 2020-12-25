import { Datum } from './dataTypes'

// --- Interfaces for Victory's container classes ---
export interface Domain {
  x: [ number, number ],
  y: [ number, number ]
}

export interface SelectedDatum {
  childName: string,
  data: Datum[],
  eventKey: number[]
}

// --- Types for Victory's container classes ---
export type SelectedData = [ SelectedDatum ] // The points argument in onSelection is an array with one item.