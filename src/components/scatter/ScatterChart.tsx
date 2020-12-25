import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { clickHandler } from '../../events/onClick'
import { mapFillStyle, mapOpacityStyle } from '../../styles/style'
import { Domain } from '../../types/containerTypes'
import { DataProps, DatumProps } from '../../types/dataTypes'

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<DataProps> = ({ data, reduxAction }) => (
  <ZoomContainer domain={domain}>
    <VictoryScatter
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }: DatumProps) => clickHandler(datum, reduxAction)
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