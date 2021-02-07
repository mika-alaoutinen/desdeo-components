import React from 'react'
import { VictoryChart, VictoryStack } from 'victory'

import { BarChartProps } from 'types/chartTypes'
import { calculatePadding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './rendering'
import { MATERIAL_THEME } from 'styles/victoryStyles'

const StackedBarChart: React.FC<BarChartProps> = ({
  datasets, labels, onClick, orientation
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <VictoryChart
      domainPadding={20}
      padding={calculatePadding(orientation)}
      theme={MATERIAL_THEME}
    >

      {drawMainAxis(datasets, labels)}
      {drawDependentAxis((x: number) => `$${x}k`)}

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