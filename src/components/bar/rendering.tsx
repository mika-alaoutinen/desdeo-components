import React from 'react'
import { VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

import { mapCoordinateToValue } from '../../data/outputTransformations'
import { mapFillStyle } from '../../styles/victoryStyles'
import { Coordinate } from '../../types/dataTypes'
import { OnClickHandler } from '../../types/eventHandlerTypes'
import { drawTooltip } from '../victory/components'

const createCoordinateLabel = ({ id, y }: Coordinate): string => `${id}:\n${y}`

const drawBar = (data: Coordinate[], onClick: OnClickHandler, key: number): JSX.Element => (
  <VictoryBar
    key={key}
    data={data}
    events={[
      {
        target: 'data',
        eventHandlers: {
          onClick: () => [
            {
              mutation: ({ datum }) => onClick(mapCoordinateToValue(datum)),
            },
          ],
        },
      },
    ]}
    labelComponent={drawTooltip()}
    labels={({ datum }) => createCoordinateLabel(datum)}
    style={{
      data: {
        fill: ({ datum }) => mapFillStyle(datum),
      },
    }}
  />
)

const drawMainAxis = (labels: string[]): JSX.Element => (
  <VictoryAxis tickFormat={labels} tickLabelComponent={<VictoryLabel angle={-35} />} />
)

const drawDependentAxis = (tickFormatter?: (x: number) => string): JSX.Element => (
  <VictoryAxis dependentAxis tickFormat={(x: number) => (tickFormatter ? tickFormatter(x) : x)} />
)

export { createCoordinateLabel, drawBar, drawMainAxis, drawDependentAxis }
