import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../victory/ZoomContainer'
import { createCoordinateLabel, drawDependentAxis, drawMainAxis } from './rendering'
import { drawTooltip } from '../victory/components'
import { mapFillStyle } from '../../styles/victoryStyles'
import { CoordinateChart } from '../../types/chartTypes'

const ScatterChart: React.FC<CoordinateChart> = ({ data, onClick, xAxisLabel, yAxisLabel }) => (
  <ZoomContainer>
    {drawMainAxis(xAxisLabel)}
    {drawDependentAxis(yAxisLabel)}

    <VictoryScatter
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [
              {
                mutation: ({ datum }) => onClick(datum),
              },
            ],
          },
        },
      ]}
      labelComponent={drawTooltip()}
      labels={({ datum }) => createCoordinateLabel(datum)}
      size={5}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum),
        },
      }}
    />
  </ZoomContainer>
)

export default ScatterChart
