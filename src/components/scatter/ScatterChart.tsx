import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { Domain } from '../../types/containerTypes'
import { updateSelected } from '../../events/BarChartEvents'
import { mapFillStyle, mapOpacityStyle } from '../../styles/style'
import { DataProps } from '../../types/dataTypes'
import { DatumProps } from '../../types/extendedTypes'

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<DataProps> = ({ data, onClick }) => {
  const clickHandler = (props: DatumProps): DatumProps => {
    const editedProps = updateSelected(props)
    if (onClick) {
      onClick(editedProps.datum)
    }
    return editedProps
  }
  
  return (
    <ZoomContainer domain={domain}>
      <VictoryScatter
        data={data}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => [{
                mutation: (props: DatumProps) => clickHandler(props)
              }]
            }
          }
        ]}
        size={7}
        style={{
          data: {
            fill: data => mapFillStyle(data.datum),
            opacity: data => mapOpacityStyle(data.datum)
          }
        }}
      />        
    </ZoomContainer>
  )
}

export default ScatterChart