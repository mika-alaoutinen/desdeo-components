import React from 'react'

import CoordinateTableColumn from './CoordinateTableColumn'
import { Coordinate } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

interface Props {
  data: Coordinate[],
  onClick: OnClickHandler
}

const CoordinateTableBody: React.FC<Props> = ({ data, onClick }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(coordinate =>
      <CoordinateTableColumn
        key={coordinate.id}
        coordinate={coordinate}
        onClick={onClick}
      />
    )

  return (
    <tbody>
      {renderRows()}
    </tbody>
  )
}

export default CoordinateTableBody