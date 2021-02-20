import React from 'react'
import { VictoryArea, VictoryChart, VictoryGroup, VictoryPolarAxis } from 'victory'

import { MATERIAL_THEME } from '../../styles/victoryStyles'
import { Attribute, AttributeSet, MaxValue } from '../../types/dataTypes'
import { defaultSpokeStyle } from './radarStyles'
import { drawPolarAxix } from './rendering'

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
    maxValues.map(({ label }, i) => {
      const maxValue = maxValues[i].value
      const tickFormatter = (tick: number) => Math.ceil(tick * maxValue)
      return drawPolarAxix(label, i, tickFormatter)
    })

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
