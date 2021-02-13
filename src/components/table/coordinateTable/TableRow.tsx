import React, { useState } from 'react'

import { OnClickHandler } from '../../../types/chartTypes'
import { Coordinate } from '../../../types/dataTypes'
import { backgroundColor, padding, rowStyle } from '../tableStyles'

interface Props {
  datum: Coordinate,
  onClick: OnClickHandler
}

const TableRow: React.FC<Props> = ({ datum, onClick }) => {
  const [ color, setColor ] = useState<backgroundColor>('white')

  const { id, x, y } = datum
  const label = datum.label ? datum.label : 'no label'
  const selected = datum.isSelected ? 'true' : 'false'

  const renderCell = (text: string): JSX.Element =>
    <td style={padding}>{text}</td>

  return (
    <tr
      key={id}
      onClick={() => onClick(datum)}
      onMouseEnter={() => setColor('whitesmoke')}
      onMouseLeave={() => setColor('white')}
      style={rowStyle(color, datum.isSelected)}
    >
      {renderCell(label)}
      {renderCell(x.toString())}
      {renderCell(y.toString())}
      {renderCell(selected)}
    </tr>
  )
}

export default TableRow