import React from 'react'
import { VictoryChart, VictoryScatter, VictoryZoomContainer } from 'victory'

import {
  createCoordinateLabel, drawDependentAxis, drawMainAxis, drawTooltip
} from './rendering'
import { DOMAIN_PADDING, mapFillStyle, MATERIAL_THEME } from '../../styles/victoryStyles'
import { OnClickChart } from '../../types/chartTypes'

const ScatterChart: React.FC<OnClickChart> = ({
  data, onClick, xAxisLabel, yAxisLabel
}) => (

  <VictoryChart
    containerComponent={<VictoryZoomContainer />}
    domainPadding={DOMAIN_PADDING}
    theme={MATERIAL_THEME}
  >

    {drawMainAxis(xAxisLabel)}
    {drawDependentAxis(yAxisLabel)}

    <VictoryScatter
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }) => onClick(datum)
            }]
          }
        }
      ]}
      labelComponent={drawTooltip()}
      labels={({ datum }) => createCoordinateLabel(datum)}
      size={5}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum),
        }
      }}
    />

  </VictoryChart>
)

export default ScatterChart