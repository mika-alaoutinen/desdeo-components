import React from 'react'
import { VictoryPolarAxis, VictoryLabel } from 'victory'
import { defaultPolarAxisStyle } from './radarStyles'

type TickFormatter = (tick: number) => number

const drawPolarAxix = (label: string, n: number, tickFormatter: TickFormatter): JSX.Element => (
  <VictoryPolarAxis
    key={n}
    axisValue={n + 1}
    dependentAxis
    label={label}
    labelPlacement='perpendicular'
    tickFormat={tickFormatter}
    tickLabelComponent={<VictoryLabel labelPlacement='vertical' />}
    tickValues={[0.25, 0.5, 0.75]}
    style={defaultPolarAxisStyle}
  />
)

export { drawPolarAxix }
