import React from 'react'
import { VictoryChart, VictoryGroup } from 'victory'

import { calculatePadding } from '../layout'
import { drawBar, drawMainAxis, drawDependentAxis } from '../rendering'
import { calculateHeight, calculateWidth } from '../../victory/containerUtils'
import { DEFAULT_COLOR_SCALE, MATERIAL_THEME } from '../../../styles/victoryStyles'
import { BarChartProps } from '../../../types/chartTypes'

const GroupedBarChart: React.FC<BarChartProps> = ({ data, labels, onClick, orientation }) => {
  const drawBars = (): JSX.Element[] => data.map((dataset, i) => drawBar(dataset.data, onClick, i))

  return (
    <VictoryChart
      height={calculateHeight(data, orientation)}
      padding={calculatePadding(orientation)}
      theme={MATERIAL_THEME}
      width={calculateWidth(data, orientation)}
    >
      {drawMainAxis(labels)}
      {drawDependentAxis()}

      <VictoryGroup
        colorScale={DEFAULT_COLOR_SCALE}
        horizontal={orientation === 'horizontal'}
        offset={8}
        style={{
          data: {
            width: 6,
          },
        }}
      >
        {drawBars()}
      </VictoryGroup>
    </VictoryChart>
  )
}

export default GroupedBarChart
