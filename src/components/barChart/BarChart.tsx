import React from 'react'
import { VictoryBar } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { updateSelected } from '../../events/onClick'
import { mapFillStyle } from '../../styles/style'
import { DataProps } from '../../types/dataTypes'
import { DatumProps } from '../../types/extendedTypes'

const BarChart: React.FC<DataProps> = ({ data, onClick }) => {
  
  const clickHandler = (props: DatumProps): DatumProps => {
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
                mutation: (props: DatumProps) => clickHandler(props)
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