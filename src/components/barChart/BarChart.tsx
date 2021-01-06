import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnClickChart } from '../../types/chartTypes'

const BarChart: React.FC<OnClickChart> = ({ data, onClick }) => (
  <ChartContainer>

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

  </ChartContainer>
)

export default BarChart