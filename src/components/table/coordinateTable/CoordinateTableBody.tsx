import React from 'react'

import CoordinateTableColumn from './CoordinateTableColumn'
import { OnClickHandler } from '../../../types/chartTypes'
import { Coordinate } from '../../../types/dataTypes'

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