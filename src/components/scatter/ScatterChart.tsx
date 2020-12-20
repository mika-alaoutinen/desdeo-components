import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { Domain } from '../../types/containerTypes'
import { DataProps } from '../../types/dataTypes'
import { mapFillStyle, mapOpacityStyle } from '../../styles/style'

import { BarPropsExt } from '../../types/extendedTypes'
import { updateSelected } from '../../events/BarChartEvents'

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<DataProps> = ({ data, onClick }) => {
  const clickHandler = (props: BarPropsExt): BarPropsExt => {
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
                mutation: (props: BarPropsExt) => clickHandler(props)
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