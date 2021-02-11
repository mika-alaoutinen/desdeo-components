import React from 'react'
import { VictoryBar, VictoryChart } from 'victory'

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
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum)
        }
      }}
    />

  </VictoryChart>
)

export default BarChart