import React from 'react'
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryTooltip } from 'victory'

import { OnClickHandler } from 'types/chartTypes'
import { CoordinateSet } from 'types/dataTypes'
import { createAxisLabels } from './utils'

// Reusable functions for rendering Victory components

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

// No idea why tickLabels angle is giving a TypeScript error.
const drawMainAxis = (datasets: CoordinateSet[], labels?: string[]): JSX.Element =>
  <VictoryAxis
    style={{
      ticks: { padding: 10 },
      tickLabels: { angle: -35 }
    }}
    tickFormat={labels ? labels : createAxisLabels(datasets)}
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
  drawBar, drawMainAxis, drawDependentAxis, drawTooltip
}