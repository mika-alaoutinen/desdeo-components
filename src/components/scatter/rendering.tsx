import React from 'react'
import { VictoryAxis, VictoryLabel, VictoryTooltip } from 'victory'

import { axisStyles } from '../../containers/containerStyles'
import { Coordinate } from '../../types/dataTypes'

const createCoordinateLabel = ({ id, x, y }: Coordinate): string =>
  `${id}:
  X: ${x}
  Y: ${y}`

const drawMainAxis = (label?: string): JSX.Element =>
  <VictoryAxis
    label={label}
    style={axisStyles}
  />

const drawDependentAxis = (label?: string): JSX.Element =>
  <VictoryAxis
    dependentAxis
    label={label}
    style={axisStyles}
  />

const drawTooltip = (): JSX.Element =>
  <VictoryTooltip
    flyoutComponent={<VictoryLabel />}
    style={{ fontSize: 10 }}
  />

export {
  createCoordinateLabel, drawDependentAxis, drawMainAxis, drawTooltip
}