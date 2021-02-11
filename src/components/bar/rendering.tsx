import React from 'react'
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryTooltip } from 'victory'

import { createCoordinateLabel } from './dataParser'
import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { Orientation } from '../../types/layoutTypes'

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
    labels={({ datum }) => createCoordinateLabel(datum)}
  />

const drawMainAxis = (labels: string[]): JSX.Element =>
  <VictoryAxis
    tickFormat={labels}
    tickLabelComponent={<VictoryLabel angle={-35} />}
  />

const drawDependentAxis = (tickFormatter?: (x: number) => string): JSX.Element =>
  <VictoryAxis
    dependentAxis
    tickFormat={(x: number) => tickFormatter ? tickFormatter(x) : x}
  />

const drawTooltip = (orientation: Orientation): JSX.Element => {
  const offset = orientation === 'vertical'
    ? { y: 10 }
    : { x: -10 }

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