import React from 'react'
import { VictoryTooltip, VictoryLabel } from 'victory'

import { Orientation } from '../../types/layoutTypes'

interface Offset {
  x?: number,
  y?: number
}

const calculateOffset = (orientation: Orientation): Offset =>
  orientation === 'vertical'
    ? { y: 10 }
    : { x: -10 }

export const drawTooltip = (orientation?: Orientation): JSX.Element => (
  <VictoryTooltip
    centerOffset={orientation ? calculateOffset(orientation) : undefined}
    flyoutComponent={<VictoryLabel />}
    style={{ fontSize: 10 }}
  />
)