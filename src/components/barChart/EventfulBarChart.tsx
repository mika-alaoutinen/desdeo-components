import React from 'react'
import { BarProps, VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { defaultClickHandler } from '../../events/BarChartEvents'
import { EventTestData } from './data'

interface Props {
  data: EventTestData[],
  clickHandler?: (event: EventTestData) => void
}

interface Mutation {
  target?: 'data' | 'labels' | 'parent',
  mutation: (props: BarProps) => void
}

const EventfulBarChart: React.FC<Props> = ({ data, clickHandler }) => {

  const onClick = (): Mutation[] => [{
    target: 'data',
    mutation: ({ datum }) => clickHandler
      ? clickHandler(datum)
      : defaultClickHandler(datum)
  }]
  
  return (
    <ChartContainer>
      <VictoryBar
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: { onClick }
          }
        ]}
      />
    </ChartContainer>
  )
}

export default EventfulBarChart