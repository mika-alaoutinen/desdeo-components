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

// Does not include all of the fields in the real props object!
export interface SelectionContainerProps {
  activateSelectedData: boolean,
  allowSelection: boolean,
  dataSets: DataSet,
  domain: Domain,
  height: number,
  responsive: boolean,
  select: boolean,
  selectedData: SelectedData,
  width: number,
  x1: number,
  x2: number,
  y1: number,
  y2: number
}

// --- Private interfaces ---
interface DataSets {
  childName: string,
  data: Datum[]
}

// --- Types for Victory's container classes ---
export type SelectedData = [ SelectedDatum ] // The points argument in onSelection is an array with one item.

// --- Private types ---
type DataSet = [ DataSets ] // dataSets is an array with one item