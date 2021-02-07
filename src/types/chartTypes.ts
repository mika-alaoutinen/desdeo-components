import { Coordinate, CoordinateSet } from './dataTypes'
import { Orientation } from './layoutTypes'

export interface BarChartProps {
  datasets: CoordinateSet[],
  labels: string[],
  onClick: OnClickHandler,
  orientation: Orientation
}

export interface OnClickChart {
  data: Coordinate[],
  onClick: OnClickHandler
}

export interface OnSelectChart {
  data: Coordinate[],
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

export type OnClickHandler = (clicked: Coordinate) => void
export type OnSelectHandler = (selected: Coordinate[]) => void
export type OnSelectionClearedHandler = () => void