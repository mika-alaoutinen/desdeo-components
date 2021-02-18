import React from 'react'

import CoordinateTableColumn from './CoordinateTableColumn'
import { Coordinate } from '../../../types/dataTypes'
import { OnCoordinateClick } from '../../../types/eventHandlerTypes'

interface Props {
  data: Coordinate[]
  onClick: OnCoordinateClick
}

const CoordinateTableBody: React.FC<Props> = ({ data, onClick }) => {
  const renderRows = (): JSX.Element[] =>
    data.map(coordinate => (
      <CoordinateTableColumn key={coordinate.id} coordinate={coordinate} onClick={onClick} />
    ))

  return <tbody>{renderRows()}</tbody>
}

export default CoordinateTableBody
