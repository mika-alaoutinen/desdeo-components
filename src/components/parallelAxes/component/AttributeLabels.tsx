import React from 'react'
import { VictoryAxis, VictoryLabel } from 'victory'

interface Props {
  paddingTop?: number
}

/*
  This is an especially magical component that renders the labels at the top of
  a parallel coordinates chart. The labels are derived from Attribute.x field by
  some magic. I have absolutely no idea how the label texts can be changed.
*/
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