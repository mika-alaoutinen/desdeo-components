import React from 'react'
import { VictoryChart, VictoryGroup } from 'victory'

import { DEFAULT_COLOR_SCALE, MATERIAL_THEME } from '../../styles/victoryStyles'
import { AttributeSet, MaxValue } from '../../types/dataTypes'
import { drawArea, drawPolarAxix, drawSpokeLines } from './rendering'

interface Props {
  data: AttributeSet[]
  maxValues: MaxValue[]
  showSpokeLines: boolean
}

const RadarChart: React.FC<Props> = ({ data, maxValues, showSpokeLines }) => {
  const drawAreas = (): JSX.Element[] => data.map(({ attributes }, i) => drawArea(attributes, i))

  const drawPolarAxes = (): JSX.Element[] =>
    maxValues.map(({ label }, i) => {
      const maxValue = maxValues[i].value
      const tickFormatter = (tick: number) => Math.ceil(tick * maxValue)
      return drawPolarAxix(label, i, tickFormatter)
    })

  return (
    <VictoryChart polar theme={MATERIAL_THEME} domain={{ y: [0, 1] }}>
      <VictoryGroup
        colorScale={DEFAULT_COLOR_SCALE}
        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
      >
        {drawAreas()}
      </VictoryGroup>

      {drawPolarAxes()}
      {drawSpokeLines(showSpokeLines)}
    </VictoryChart>
  )
}

export default RadarChart
