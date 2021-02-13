import React from 'react'
import { VictoryChart, VictoryGroup } from 'victory'

import { calculateHeight, calculateWidth } from '../../../containers/containerUtils'
import { calculatePadding } from '../layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from '../rendering'
import { MATERIAL_THEME } from '../../../styles/victoryStyles'
import { BarChartProps } from '../../../types/chartTypes'

const GroupedBarChart: React.FC<BarChartProps> = ({
  data, labels, onClick, orientation
}) => {

  const drawBars = (): JSX.Element[] =>
    data.map((dataset, i) => drawBar(dataset, onClick, i))

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
        horizontal={orientation === 'horizontal'}
        labelComponent={drawTooltip(orientation)}
        offset={8}
        style={{
          data: {
            width: 6
          }
        }}
      >
        {drawBars()}
      </VictoryGroup>

    </VictoryChart>
  )
}

export default GroupedBarChart