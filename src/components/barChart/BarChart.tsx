import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { BarPropsExt } from '../../types/extendedTypes'
import { changeDatumColor, updateSelected } from '../../events/BarChartEvents'
import { mapFillStyle } from '../../styles/style'
import { Datum } from '../../types/dataTypes'

interface Props {
  data: Datum[],
  onClick?: (event: Datum) => void
}

const BarChart: React.FC<Props> = ({ data, onClick }) => {
  
  const clickHandler = (props: BarPropsExt) => {
    const editedProps = updateSelected(props)
    if (onClick) {
      onClick(editedProps.datum)
    }
    return changeDatumColor(editedProps)
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