import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { defaultClickHandler } from '../../events/BarChartEvents'
import { EventTestData } from './data'
import { Mutation } from '../../events/BarChartEvents'

interface Props {
  data: EventTestData[],
  clickHandler?: (event: EventTestData) => void
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