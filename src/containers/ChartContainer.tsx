import React from 'react'
import { VictoryChart, VictoryTheme } from 'victory'

import { Domain } from './types'

interface Props {
  component?: React.ReactElement,
  domain: Domain
}

const ChartContainer: React.FC<Props> = ({ component, domain, ...props }) => (
  <VictoryChart
    { ...props }
    containerComponent={component}
    domain={domain}
    domainPadding={20}
    theme={VictoryTheme.material}
  />
)

export default ChartContainer