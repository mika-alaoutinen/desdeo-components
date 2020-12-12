import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { EventTestData } from './data'

interface Props {
  data: EventTestData[]
}

const EventfulBarChart: React.FC<Props> = ({ data }) => {
  
  return (
    <ChartContainer>
      <VictoryBar
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [{
                  target: 'labels',
                  mutation: ({ text }) => text === 'clicked' ? null : { text: 'clicked' }
                }]
              }
            }
          }
        ]}
      />
    </ChartContainer>
  )
}

export default EventfulBarChart