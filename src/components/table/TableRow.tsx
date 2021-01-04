import React from 'react'

import { Datum } from '../../types/dataTypes'
import { padding, rowStyle } from './tableStyles'

interface Props {
  datum: Datum,
  onClick: (datum: Datum) => void
}

const TableRow: React.FC<Props> = ({ datum, onClick }) => {
  const { id, x, y } = datum
  const label = datum.label ? datum.label : 'no label'
  const selected = datum.isSelected ? 'true' : 'false'

  const renderCell = (text: string): JSX.Element =>
    <td style={padding}>{text}</td>

  return (
    <tr
      key={id}
      onClick={() => onClick(datum)}
      onMouseEnter={() => console.log('enter')}
      style={rowStyle(datum.isSelected)}
    >
      {renderCell(label)}
      {renderCell(x.toString())}
      {renderCell(y.toString())}
      {renderCell(selected)}
    </tr>
  )
}

export default TableRow