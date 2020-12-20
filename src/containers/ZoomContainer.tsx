import React from 'react'
import { VictoryZoomContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { Domain } from '../types/containerTypes'

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
    <ChartContainer
      { ...props }
      component={zoomComponent()}
      domain={domain}
    />
  )
}

export default ZoomContainer