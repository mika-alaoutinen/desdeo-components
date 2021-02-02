import React from 'react'
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryTooltip } from 'victory'

import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet, DataColumn, DataSet } from '../../types/dataTypes'
import {
  createAxisLabelsCSV, getDatasetLengthCSV,
  createAxisLabels, createIntegerArray, getDatasetLength
} from './utils'

// Reusable functions for rendering Victory components

const drawBarCSV = (
  column: DataColumn, onClick: OnClickHandler, key: number|string
): JSX.Element =>
  <VictoryBar
    key={key}
    data ={column.data}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onClick: () => [{
            mutation: ({ datum }) => onClick(datum)
          }]
        }
      },
    ]}
  />

const drawMainAxisCSV = (dataset: DataSet, labels?: string[]): JSX.Element =>
  <VictoryAxis
    tickFormat={labels ? labels : createAxisLabelsCSV(dataset)}
    tickValues={createIntegerArray(getDatasetLengthCSV(dataset))}
  />

const drawBar = (
  { data }: CoordinateSet, onClick: OnClickHandler, key: number|string
): JSX.Element =>
  <VictoryBar
    key={key}
    data ={data}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onClick: () => [{
            mutation: ({ datum }) => onClick(datum)
          }]
        }
      },
    ]}
  />

const drawMainAxis = (datasets: CoordinateSet[], labels?: string[]): JSX.Element =>
  <VictoryAxis
    tickFormat={labels ? labels : createAxisLabels(datasets)}
    tickValues={createIntegerArray(getDatasetLength(datasets))}
  />

const drawDependentAxis = (tickFormatter?: (x: number) => string): JSX.Element =>
  <VictoryAxis
    dependentAxis
    tickFormat={(x: number) => tickFormatter ? tickFormatter(x) : x}
  />

const drawTooltip = (horizontal?: boolean): JSX.Element => {
  const offset = horizontal
    ? { x: -25 }
    : { y: 25 }

  return (
    <VictoryTooltip
      centerOffset={offset}
      flyoutComponent={<VictoryLabel />}
      style={{ fontSize: 10 }}
    />
  )
}

export {
  drawBarCSV, drawMainAxisCSV,
  drawBar, drawMainAxis, drawDependentAxis, drawTooltip
}