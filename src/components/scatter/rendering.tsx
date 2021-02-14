import React from 'react'
import { VictoryAxis } from 'victory'

import { axisStyles } from '../../containers/containerStyles'

const drawMainAxis = (label?: string): JSX.Element =>
  <VictoryAxis
    label={label ? label : 'X axis'}
    style={axisStyles}
  />

const drawDependentAxis = (label?: string): JSX.Element =>
  <VictoryAxis
    dependentAxis
    label={label ? label : 'XYaxis'}
    style={axisStyles}
  />

export { drawDependentAxis, drawMainAxis }