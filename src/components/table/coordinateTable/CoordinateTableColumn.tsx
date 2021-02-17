import React from 'react'

import HoverableTableRow from '../HoverableTableRow'
import CoordinateTableRow from './CoordinateTableRow'
import { Coordinate } from '../../../types/dataTypes'
import { OnCoordinateClick } from '../../../types/eventHandlerTypes'

interface Props {
  coordinate: Coordinate,
  onClick: OnCoordinateClick
}

const CoordinateTableColumn: React.FC<Props> = ({ coordinate, onClick }) => (
  <HoverableTableRow
    rows={<CoordinateTableRow coordinate={coordinate} onClick={onClick} />}
    isSelected={coordinate.isSelected}
  />
)

export default CoordinateTableColumn