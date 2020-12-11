import React from 'react'
import { VictoryChart, VictoryTheme } from 'victory'

import { Domain } from './types'

const ChartContainer: React.FC<Domain> = ({ x, y, ...props }) => (
  <VictoryChart
    { ...props }
    domain={{ x, y }}
    domainPadding={20}
    theme={VictoryTheme.material}
  />
)

export default ChartContainer