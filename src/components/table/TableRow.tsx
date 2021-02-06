import React, { useState } from 'react'

import { Coordinate } from 'types/dataTypes'
import {
  backgroundColor, padding, tableStyle, ROW_SELECTED_COLOR
} from './tableStyles'

interface Props {
  datum: Coordinate,
  onClick: (datum: Coordinate) => void
}

const TableRow: React.FC<Props> = ({ datum, onClick }) => {
  const [ color, setColor ] = useState<backgroundColor>('white')

  const { id, x, y } = datum
  const label = datum.label ? datum.label : 'no label'
  const selected = datum.isSelected ? 'true' : 'false'

  const style: React.CSSProperties = {
    ...tableStyle,
    background: datum.isSelected ? ROW_SELECTED_COLOR : color
  }

  const renderCell = (text: string): JSX.Element =>
    <td style={padding}>{text}</td>

  return (
    <tr
      key={id}
      onClick={() => onClick(datum)}
      onMouseEnter={() => setColor('whitesmoke')}
      onMouseLeave={() => setColor('white')}
      style={style}
    >
      {renderCell(label)}
      {renderCell(x.toString())}
      {renderCell(y.toString())}
      {renderCell(selected)}
    </tr>
  )
}

export default TableRow