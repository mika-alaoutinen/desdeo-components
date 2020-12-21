import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { clickHandler } from '../../events/onClick'
import { mapFillStyle } from '../../styles/style'
import { DataProps, DatumProps } from '../../types/dataTypes'

const BarChart: React.FC<DataProps> = ({ data, callback }) => (
  <ChartContainer>
    <VictoryBar
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }: DatumProps) => clickHandler(datum, callback)
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