import React from 'react'
import { VictoryBrushLine } from 'victory'

import { OnDomainChange } from './events'

interface Props {
  name: string,
  onChange: OnDomainChange
}

const BrushLine: React.FC<Props> = ({ name, onChange }) => (
  <VictoryBrushLine
    name={name}
    onBrushDomainChange={(domain) => onChange(domain as [number, number])}
    width={20}
  />
)

export default BrushLine