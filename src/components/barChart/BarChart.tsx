import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { eventHandler } from '../../events/onClick'
import { mapFillStyle } from '../../styles/style'
import { DataProps, DatumProps } from '../../types/dataTypes'

const BarChart: React.FC<DataProps> = ({ data, setData, reduxAction }) => (
  <ChartContainer>
    
    <VictoryBar
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }: DatumProps) =>
                eventHandler(datum, data, setData, reduxAction)
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