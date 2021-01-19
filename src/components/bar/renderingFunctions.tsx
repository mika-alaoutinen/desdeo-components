import React from 'react'
import { VictoryAxis, VictoryBar } from 'victory'

import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { createAxisLabels, createIntegerArray, getDatasetLength } from './utils'

// Reusable functions for rendering Victory components

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

export { drawBar, drawMainAxis, drawDependentAxis }