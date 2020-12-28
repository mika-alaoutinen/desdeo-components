import React from 'react'
import { VictoryChart, VictoryTheme } from 'victory'

import { Domain } from '../types/containerTypes'

interface Props {
  component?: React.ReactElement,
  domain?: Domain
}

const style: React.CSSProperties = {
  height: '50%',
  width: '50%',
}

const ChartContainer: React.FC<Props> = ({ component, domain, ...props }) => (
  <div className='VictoryChartWrapper' style={style}>
    <VictoryChart
      { ...props }
      containerComponent={component}
      domain={domain}
      domainPadding={20}
      theme={VictoryTheme.material}
    />
  </div>
)

export default ChartContainer