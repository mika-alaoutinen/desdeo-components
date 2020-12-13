import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { BarPropsExt } from '../../victoryTypes/extendedTypes'
import { changeDatumColor } from '../../events/BarChartEvents'
import { EventTestData } from './data'

interface Props {
  data: EventTestData[],
  onClick: (event: EventTestData) => void
}

const EventfulBarChart: React.FC<Props> = ({ data, onClick }) => {
  
  const clickHandler = (props: BarPropsExt) => {
    onClick(props.datum)
    return changeDatumColor(props)
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
                mutation: (props: BarPropsExt) => clickHandler(props)
              }]
            }
          },
        ]}
      />
    </ChartContainer>
  )
}

export default EventfulBarChart