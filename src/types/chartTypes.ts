import {
  Coordinate, CoordinateSet, DataSet, Grouping
} from './dataTypes'
import {
  OnClickHandler, OnCoordinateClick, OnCoordinateSelect, OnSelectionClearedHandler
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

// Used with one-dimensional data, i.e. everything else except scatter plots.
interface ValueChart extends CoordinatesChart {
  onClick: OnClickHandler
}

// Used with two-dimensional data, i.e. with scatter plots.
// Data must be given as a [x, y] coordinate pair.
interface CoordinateChart extends CoordinatesChart {
  onClick: OnCoordinateClick
}

interface CoordinateSelectChart extends CoordinatesChart {
  onSelect: OnCoordinateSelect,
  onSelectionCleared: OnSelectionClearedHandler
}

interface CoordinatesChart {
  data: Coordinate[],
  xAxisLabel?: string,
  yAxisLabel?: string
}

export type {
  BarChartProps, BarChartWrapperProps, CoordinateChart,
  CoordinateSelectChart, ValueChart
}