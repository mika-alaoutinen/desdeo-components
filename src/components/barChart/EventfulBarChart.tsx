import React from 'react'
import { BarProps, VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { EventTestData } from './data'

interface Props {
  data: EventTestData[]
}

interface Mutation {
  target?: 'data' | 'labels' | 'parent',
  mutation: (props: BarProps) => void
}

const EventfulBarChart: React.FC<Props> = ({ data }) => {
  
  const clickHandler = (): Mutation[] => [{
    target: 'data',
    mutation: (props: BarProps) => console.log('datum', props.datum)
  }]
  
  return (
    <ChartContainer>
      <VictoryBar
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return clickHandler()
                // return [{
                //   target: 'data',
                //   mutation: (props: BarProps) => console.log('data', props.datum)
                  // mutation: (props) => props.text === 'clicked' ? null : { text: 'clicked' }
                // }]
              }
            }
          }
        ]}
      />
    </ChartContainer>
  )
}

export default EventfulBarChart