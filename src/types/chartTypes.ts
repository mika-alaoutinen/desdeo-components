import { Coordinate, CoordinateSet, DataSet } from './dataTypes'
import { Orientation } from './layoutTypes'

interface BarChartProps {
  data: CoordinateSet[],
  labels: string[],
  onClick: OnClickHandler,
  orientation: Orientation
}

interface BarChartWrapperProps {
  data: DataSet,
  grouping: Grouping,
  onClick: OnClickHandler,
  orientation: Orientation
}

interface OnClickChart {
  data: Coordinate[],
  onClick: OnClickHandler,
  xAxisLabel?: string,
  yAxisLabel?: string
}

interface OnSelectChart {
  data: Coordinate[],
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

type Grouping = 'alternatives' | 'criteria'
type OnClickHandler = (clicked: Coordinate) => void
type OnSelectHandler = (selected: Coordinate[]) => void
type OnSelectionClearedHandler = () => void

export type {
  BarChartProps, BarChartWrapperProps, OnClickChart, OnSelectChart,
  Grouping, OnClickHandler, OnSelectHandler, OnSelectionClearedHandler
}