import { Datum } from './dataTypes'

// --- Interfaces for Victory's container classes ---
export interface Domain {
  x: [ number, number ],
  y: [ number, number ]
}

export interface Point {
  childName: string,
  data: Datum[],
  eventKey: number[]
}

// Does not include all of the fields in the real props object!
export interface SelectionContainerProps {
  activateSelectedData: boolean,
  allowSelection: boolean,
  // dataSets: todo
  domain: Domain,
  height: number,
  responsive: boolean,
  select: boolean,
  // selectedData: todo
  width: number,
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

// --- Types for Victory's container classes ---

// The points argument in onSelection is always an array with a length of one.
export type Points = [ Point ]