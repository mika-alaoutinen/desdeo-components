import React from 'react'
import { VictoryAxis } from 'victory'

import BrushLine from './BrushLine'
import { OnDomainChange } from './events'

interface Props {
  name: string,
  onChange: OnDomainChange,
  maxValue?: number,
  offsetX?: number
}

const BrushAxis: React.FC<Props> = ({ name, onChange, maxValue, offsetX }) => (
  <VictoryAxis
    axisComponent={<BrushLine name={name} onChange={onChange} />}
    dependentAxis
    offsetX={offsetX ? offsetX : 10}
    style={{
      tickLabels: {
        fontSize: 15,
        padding: 15,
        pointerEvents: 'none'
      }
    }}
    tickFormat={(tick) => maxValue ? Math.round(tick * maxValue) : 1}
    tickValues={[ 0.2, 0.4, 0.6, 0.8, 1 ]}
  />
)

export default BrushAxis