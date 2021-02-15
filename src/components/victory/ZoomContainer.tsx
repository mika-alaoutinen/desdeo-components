import React from 'react'
import { VictoryChart, VictoryZoomContainer } from 'victory'

import { DOMAIN_PADDING, MATERIAL_THEME } from '../../styles/victoryStyles'
import { Domain } from '../../types/victoryTypes'

interface Props {
  domain?: Domain,
  zoomDomain?: Domain
}

const ZoomContainer: React.FC<Props> = ({ domain, zoomDomain, ...props }) => (
  <VictoryChart
    { ...props }
    containerComponent={<VictoryZoomContainer zoomDomain={zoomDomain} />}
    domain={domain}
    domainPadding={DOMAIN_PADDING}
    theme={MATERIAL_THEME}
  />
)

export default ZoomContainer