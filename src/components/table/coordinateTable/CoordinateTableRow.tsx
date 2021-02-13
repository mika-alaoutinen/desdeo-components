import React from 'react'

import { padding } from '../tableStyles'
import { Coordinate } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/chartTypes'

interface Props {
  coordinate: Coordinate,
  onClick: OnClickHandler
}

const CoordinateTableRow: React.FC<Props> = ({ coordinate, onClick }) => {
  const { x, y } = coordinate
  const label = coordinate.label ? coordinate.label : 'no label'
  const selected = coordinate.isSelected ? 'true' : 'false'

  // Clicking on any cell selects the coordinate
  const renderCell = (text: string): JSX.Element =>
    <td onClick={() => onClick(coordinate)} style={padding}>{text}</td>

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