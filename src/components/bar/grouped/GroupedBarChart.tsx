import React from 'react'
import { VictoryChart, VictoryGroup } from 'victory'

import { calculateHeight, calculateWidth } from '../../../containers/containerUtils'
import { calculatePadding } from '../layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from '../rendering'
import { MATERIAL_THEME } from '../../../styles/victoryStyles'
import { BarChartProps } from '../../../types/chartTypes'

const GroupedBarChart: React.FC<BarChartProps> = ({
  datasets, labels, onClick, orientation
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <VictoryChart
      height={calculateHeight(datasets, orientation)}
      padding={calculatePadding(orientation)}
      theme={MATERIAL_THEME}
      width={calculateWidth(datasets, orientation)}
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