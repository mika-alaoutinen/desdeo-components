import React from 'react'
import { VictoryAxis, VictoryChart, VictoryZoomContainer } from 'victory'

import { axisStyles } from './containerStyles'
import { DOMAIN_PADDING, MATERIAL_THEME } from '../styles/victoryStyles'
import { Domain } from '../types/victoryTypes'

interface Props {
  domain?: Domain,
  xAxisLabel?: string,
  yAxisLabel?: string,
  zoomDomain?: Domain
}

const ZoomContainer: React.FC<Props> = ({
  domain, xAxisLabel, yAxisLabel, zoomDomain, ...props
}) => {

  return (
    <VictoryChart
    {...props}
      containerComponent={<VictoryZoomContainer zoomDomain={zoomDomain} />}
      domain={domain}
      domainPadding={DOMAIN_PADDING}
      theme={MATERIAL_THEME}
    >

      <VictoryAxis
        label={xAxisLabel ? xAxisLabel : 'X axis'}
        style={axisStyles}
      />

      <VictoryAxis
        dependentAxis
        label={yAxisLabel ? yAxisLabel : 'Y axis'}
        style={axisStyles}
      />
      <div {...props} />
    </VictoryChart>
  )
}

export default ZoomContainer