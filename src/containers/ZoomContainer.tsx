import React from 'react'
import { VictoryZoomContainer } from 'victory'

import ChartContainer from './ChartContainer'
import { Domain } from './types'

const domain: Domain = {
  x: [0, 10],
  y: [0, 10]
}

const ZoomContainer: React.FC<Domain> = ({ x, y }) => {

  const zoomComponent = (): JSX.Element =>
    <VictoryZoomContainer
      zoomDomain={{ x, y }}
    />

  return (
    <ChartContainer
      component={zoomComponent()}
      domain={domain}
    >
    </ChartContainer>
  )
}

export default ZoomContainer