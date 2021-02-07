import React from 'react'
import { VictoryChart, VictoryZoomContainer } from 'victory'

import { DOMAIN_PADDING, MATERIAL_THEME } from 'styles/victoryStyles'
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
      domainPadding={DOMAIN_PADDING}
      theme={MATERIAL_THEME}
    />
  )
}

export default ZoomContainer