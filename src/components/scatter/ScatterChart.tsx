import React from 'react'
import { VictoryAxis, VictoryChart, VictoryScatter, VictoryZoomContainer } from 'victory'
import { axisStyles } from '../../containers/containerStyles'

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

    <VictoryAxis
      label={xAxisLabel ? xAxisLabel : 'X axis'}
      style={axisStyles}
    />

    <VictoryAxis
      dependentAxis
      label={yAxisLabel ? yAxisLabel : 'Y axis'}
      style={axisStyles}
    />

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
      size={7}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum),
        }
      }}
    />

  </VictoryChart>
)

export default ScatterChart