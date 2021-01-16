import React from 'react'
import { VictoryAxis, VictoryLabel } from 'victory'

interface Props {
  paddingTop?: number
}

const AttributeLabels: React.FC<Props> = ({ paddingTop, ...props }) => {

  const createLabels = (): JSX.Element =>
      <VictoryLabel y={paddingTop ? paddingTop : 60} />

  return (
    <VictoryAxis
      { ...props }
      style={{
        axis: { stroke: 'none' },
        tickLabels: { fontSize: 20 }
      }}
      tickLabelComponent={createLabels()}
    />
  )
}

export default AttributeLabels