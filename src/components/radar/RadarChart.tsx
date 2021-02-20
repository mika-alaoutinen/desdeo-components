import React from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis } from 'victory'

import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { Attribute, AttributeSet, MaxValue } from '../../types/dataTypes'
import { defaultPolarAxisStyle, defaultSpokeStyle } from './radarStyles'

interface Props {
  data: AttributeSet[]
  maxValues: MaxValue[]
  showSpokeLines: boolean
}

const RadarChart: React.FC<Props> = ({ data, maxValues, showSpokeLines }) => {
  const drawAreas = (): JSX.Element[] => data.map(({ attributes }, i) => drawArea(attributes, i))

  const drawArea = (attributes: Attribute[], key: number): JSX.Element => (
    <VictoryArea key={key} data={attributes} />
  )

  const drawPolarAxes = (): JSX.Element[] =>
    maxValues.map(({ label }, i) => drawPolarAxix(label, i))

  const drawPolarAxix = (label: string, n: number): JSX.Element => (
    <VictoryPolarAxis
      key={n}
      axisValue={n + 1}
      dependentAxis
      label={label}
      labelPlacement='perpendicular'
      tickFormat={tick => Math.ceil(tick * maxValues[n].value)}
      tickLabelComponent={<VictoryLabel labelPlacement='vertical' />}
      tickValues={[0.25, 0.5, 0.75]}
      style={defaultPolarAxisStyle}
    />
  )

  const drawSpokeLines = (): JSX.Element => (
    <VictoryPolarAxis labelPlacement='parallel' tickFormat={() => ''} style={defaultSpokeStyle} />
  )

  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}>
        {drawAreas()}
      </VictoryGroup>

      {drawPolarAxes()}
      {showSpokeLines && drawSpokeLines()}
    </VictoryChart>
  )
}

export default RadarChart
