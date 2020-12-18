import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { updateSelected } from '../../events/BarChartEvents'
import { mapFillStyle } from '../../styles/style'
import { DataProps } from '../../types/dataTypes'
import { BarPropsExt } from '../../types/extendedTypes'

const BarChart: React.FC<DataProps> = ({ data, onClick }) => {
  
  const clickHandler = (props: BarPropsExt): BarPropsExt => {
    const editedProps = updateSelected(props)
    if (onClick) {
      onClick(editedProps.datum)
    }
    return editedProps
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
        style={{
          data: {
            fill: data => mapFillStyle(data.datum)
          }
        }}
      />
    </ChartContainer>
  )
}

export default BarChart