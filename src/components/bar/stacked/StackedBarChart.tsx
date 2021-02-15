import React from 'react'
import { VictoryChart, VictoryStack } from 'victory'

import { calculatePadding } from '../layout'
import { drawBar, drawMainAxis, drawDependentAxis } from '../rendering'
import { drawTooltip } from '../../victory/components'
import { calculateWidth } from '../../victory/containerUtils'
import { MATERIAL_THEME } from '../../../styles/victoryStyles'
import { BarChartProps } from '../../../types/chartTypes'

const StackedBarChart: React.FC<BarChartProps> = ({
  data, labels, onClick, orientation
}) => {

  const drawBars = (): JSX.Element[] =>
    data.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <VictoryChart
      domainPadding={10}
      padding={calculatePadding(orientation)}
      theme={MATERIAL_THEME}
      width={calculateWidth(data, orientation)}
    >

      {drawMainAxis(labels)}
      {drawDependentAxis()}

      <VictoryStack
        horizontal={orientation === 'horizontal'}
        labelComponent={drawTooltip(orientation)}
        style={{
          data: {
            width: 20
          }
        }}
      >
        {drawBars()}
      </VictoryStack>

    </VictoryChart>
  )
}

export default StackedBarChart