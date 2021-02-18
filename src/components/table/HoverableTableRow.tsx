import React, { useState } from 'react'

import { backgroundColor, rowStyle } from './tableStyles'

interface Props {
  rows: JSX.Element | JSX.Element[]
  isSelected?: boolean
}

const HoverableTableRow: React.FC<Props> = ({ rows, isSelected }) => {
  const [color, setColor] = useState<backgroundColor>('white')

  return (
    <tr
      onMouseEnter={() => setColor('whitesmoke')}
      onMouseLeave={() => setColor('white')}
      style={rowStyle(color, isSelected)}
    >
      {rows}
    </tr>
  )
}

export default HoverableTableRow
