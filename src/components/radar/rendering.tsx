import React from 'react'
import { VictoryArea, VictoryLabel, VictoryPolarAxis } from 'victory'
import { Attribute } from '../../types/dataTypes'
import { defaultPolarAxisStyle, defaultSpokeStyle } from './radarStyles'

type TickFormatter = (tick: number) => number

const drawArea = (attributes: Attribute[], key: number): JSX.Element => (
  <VictoryArea key={key} data={attributes} />
)

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

const drawSpokeLines = (showSpokes: boolean): JSX.Element | false =>
  showSpokes && (
    <VictoryPolarAxis
      name='spokeLine'
      labelPlacement='parallel'
      tickFormat={() => ''}
      style={defaultSpokeStyle}
    />
  )

export { drawArea, drawPolarAxix, drawSpokeLines }
