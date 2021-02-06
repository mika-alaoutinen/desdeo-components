import React from 'react'
import { VictoryChart, VictoryTheme } from 'victory'

import { Domain } from 'types/containerTypes'
import { Padding } from 'types/layoutTypes'

interface Props {
  component?: React.ReactElement,
  domain?: Domain,
  height?: number,
  padding?: Padding
}

const ChartContainer: React.FC<Props> = ({
  component, domain, height, padding, ...props
}) => (
  <VictoryChart
    { ...props }
    containerComponent={component}
    domain={domain}
    domainPadding={20}
    height={height ? height : undefined}
    padding={padding}
    theme={VictoryTheme.material}
  />
)

export default ChartContainer