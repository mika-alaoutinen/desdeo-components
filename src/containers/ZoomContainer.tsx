import React from 'react'
import { VictoryChart, VictoryTheme, VictoryZoomContainer } from 'victory'

import { Domain } from 'types/containerTypes'

interface Props {
  domain: Domain,
  zoomDomain?: Domain
}

const ZoomContainer: React.FC<Props> = ({ domain, zoomDomain, ...props }) => {

  const zoomComponent = (): JSX.Element =>
    <VictoryZoomContainer
      zoomDomain={zoomDomain}
    />

  return (
    <VictoryChart
      { ...props }
      containerComponent={zoomComponent()}
      domain={domain}
      domainPadding={20}
      theme={VictoryTheme.material}
    />
  )
}

export default ZoomContainer