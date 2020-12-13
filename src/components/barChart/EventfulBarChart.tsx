import React from 'react'
import { BarProps, VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { EventTestData } from './data'

interface Props {
  data: EventTestData[],
  onClick: (event: EventTestData) => void
}

const EventfulBarChart: React.FC<Props> = ({ data, onClick }) => {
  
  const clickHandler = (props: BarProps) => {
    onClick(props.datum)
    
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    return props.style.fill === 'tomato'
      ? null
      : { style: { fill: 'tomato' } }
  }
  
  return (
    <ChartContainer>
      <VictoryBar
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => [{
                mutation: (props: BarProps) => clickHandler(props)
              }]
            }
          },
        ]}
      />
    </ChartContainer>
  )
}

export default EventfulBarChart