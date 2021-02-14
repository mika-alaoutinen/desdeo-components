import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnClickChart } from '../../types/chartTypes'

const ScatterChart: React.FC<OnClickChart> = ({ data, onClick }) => (
  <ZoomContainer>

    <VictoryScatter
      data={data}
      events={[
        {
          target: 'data',
          eventHandlers: {
            onClick: () => [{
              mutation: ({ datum }) => onClick(datum)
            }]
          }
        }
      ]}
      size={7}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum),
        }
      }}
    />

  </ZoomContainer>
)

export default ScatterChart