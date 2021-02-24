import React from 'react'
import { VictoryAxis, VictoryChart } from 'victory'

import { drawBar } from '../rendering'
import { DOMAIN_PADDING, MATERIAL_THEME } from '../../../styles/victoryStyles'
import { ValueChart } from '../../../types/chartTypes'

const BarChart: React.FC<ValueChart> = ({ data, onClick, xAxisLabel }) => (
  <VictoryChart domainPadding={DOMAIN_PADDING} theme={MATERIAL_THEME}>
    <VictoryAxis
      label={xAxisLabel}
      style={{
        ticks: { stroke: 'transparent' },
        tickLabels: { fill: 'transparent' },
      }}
    />

    <VictoryAxis dependentAxis />
    {drawBar(data, onClick, 1)}
  </VictoryChart>
)

export default BarChart
