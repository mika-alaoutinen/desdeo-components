import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { onClickHandler } from '../../events/onClick'
import { mapFillStyle, mapOpacityStyle } from '../../styles/victoryStyles'
import { Domain } from '../../types/containerTypes'
import { DataProps, DatumProps } from '../../types/dataTypes'

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<DataProps> = ({ data, setData, reduxAction }) => (
  <ZoomContainer domain={domain}>
    
    <VictoryScatter
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }: DatumProps) =>
                onClickHandler(datum, data, setData, reduxAction)
            }]
          }
        }
      ]}
      size={7}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum),
          opacity: ({ datum }) => mapOpacityStyle(datum)
        }
      }}
    />        
    
  </ZoomContainer>
)

export default ScatterChart