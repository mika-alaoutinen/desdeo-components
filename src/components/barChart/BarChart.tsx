import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { onClickHandler } from '../../events/onClick'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnClickChart } from '../../types/chartTypes'
import { DatumProps } from '../../types/dataTypes'

const BarChart: React.FC<OnClickChart> = ({ data, onClick }) => (
  <ChartContainer>
    
    <VictoryBar
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }: DatumProps) => onClickHandler(datum, data, onClick)
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