import React from 'react'

import { padding } from '../tableStyles'
import { Coordinate } from '../../../types/dataTypes'

interface Props {
  coordinate: Coordinate
}

const CoordinateTableRow: React.FC<Props> = ({ coordinate }) => {
  const { x, y } = coordinate
  const label = coordinate.label ? coordinate.label : 'no label'
  const selected = coordinate.isSelected ? 'true' : 'false'

  const renderCell = (text: string): JSX.Element =>
    <td style={padding}>{text}</td>

  return (
    <>
      {renderCell(label)}
      {renderCell(x.toString())}
      {renderCell(y.toString())}
      {renderCell(selected)}
    </>
  )
}

export default CoordinateTableRow