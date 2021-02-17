import {
  Coordinate, CoordinateSet, DataSet
} from './dataTypes'
import {
  OnClickHandler, OnSelectHandler, OnSelectionClearedHandler
} from './eventHandlerTypes'
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

interface OnClickChart extends CoordinateChart {
  onClick: OnClickHandler
}

interface OnSelectChart extends CoordinateChart {
  onSelect: OnSelectHandler,
  onSelectionCleared: OnSelectionClearedHandler
}

interface CoordinateChart {
  data: Coordinate[],
  xAxisLabel?: string,
  yAxisLabel?: string
}

type Grouping = 'alternatives' | 'criteria'

export type {
  BarChartProps, BarChartWrapperProps, CoordinateChart, OnClickChart,
  OnSelectChart, Grouping
}