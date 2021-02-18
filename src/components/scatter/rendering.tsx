import React from 'react'
import { VictoryAxis } from 'victory'

import { Coordinate } from '../../types/dataTypes'

const axisStyles = {
  tickLabels: {
    fontSize: 10,
  },
  axisLabel: {
    padding: 38,
    fontSize: 12,
  },
}

const createCoordinateLabel = ({ id, x, y }: Coordinate): string => `${id}:\nX: ${x}\nY: ${y}`

const drawMainAxis = (label?: string): JSX.Element => (
  <VictoryAxis label={label} style={axisStyles} />
)

const drawDependentAxis = (label?: string): JSX.Element => (
  <VictoryAxis dependentAxis label={label} style={axisStyles} />
)

export { createCoordinateLabel, drawDependentAxis, drawMainAxis }
