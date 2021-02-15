import React from 'react'
import { VictoryBar, VictoryChart } from 'victory'

import { drawTooltip } from '../rendering'
import { createCoordinateLabel } from '../../../data/parser'
import { DOMAIN_PADDING, mapFillStyle, MATERIAL_THEME } from '../../../styles/victoryStyles'
import { OnClickChart } from '../../../types/chartTypes'

const BarChart: React.FC<OnClickChart> = ({ data, onClick }) => (
  <VictoryChart
    domainPadding={DOMAIN_PADDING}
    theme={MATERIAL_THEME}
  >

    <VictoryBar
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }) => onClick(datum)
            }]
          }
        },
      ]}
      labelComponent={drawTooltip('vertical')}
      labels={({ datum }) => createCoordinateLabel(datum)}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum)
        }
      }}
    />

  </VictoryChart>
)

export default BarChart