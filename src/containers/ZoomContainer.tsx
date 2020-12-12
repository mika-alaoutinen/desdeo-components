import React from 'react'
import { VictoryZoomContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { Domain } from './types'

interface Props {
  domain: Domain
}

const ZoomContainer: React.FC<Props> = ({ domain, ...props }) => {

  const zoomComponent = (): JSX.Element =>
    <VictoryZoomContainer
      zoomDomain={domain}
    />

  return (
    <ChartContainer
      { ...props }
      component={zoomComponent()}
      domain={domain}
    >
    </ChartContainer>
  )
}

export default ZoomContainer