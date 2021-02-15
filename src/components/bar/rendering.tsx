import React from 'react'
import { VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

import { OnClickHandler } from '../../types/chartTypes'
import { Coordinate, CoordinateSet } from '../../types/dataTypes'

const createCoordinateLabel = ({ id, y }: Coordinate): string =>
  `${id}:\n${y}`

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

export {
  createCoordinateLabel, drawBar, drawMainAxis, drawDependentAxis
}