import React, { useState } from 'react'

import { OnClickHandler } from '../../../types/chartTypes'
import { Coordinate } from '../../../types/dataTypes'
import { backgroundColor, rowStyle } from '../tableStyles'
import CoordinateTableRow from './CoordinateTableRow'

interface Props {
  coordinate: Coordinate,
  onClick: OnClickHandler
}

const CoordinateTableColumn: React.FC<Props> = ({ coordinate, onClick }) => {
  const [ color, setColor ] = useState<backgroundColor>('white')
  const { id, isSelected } = coordinate

  return (
    <tr
      key={id}
      onClick={() => onClick(coordinate)}
      onMouseEnter={() => setColor('whitesmoke')}
      onMouseLeave={() => setColor('white')}
      style={rowStyle(color, isSelected)}
    >
      <CoordinateTableRow coordinate={coordinate} />
    </tr>
  )
}

export default CoordinateTableColumn