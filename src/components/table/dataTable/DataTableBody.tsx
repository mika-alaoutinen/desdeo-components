import React from 'react'

import DataTableColumn from './DataTableColumn'
import { Value } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

interface Props {
  data: Value[][],
  onClick: OnClickHandler
}

const DataTableBody: React.FC<Props> = ({ data, onClick }) => {

  const renderColumns = (): JSX.Element[] =>
    data.map((column, i) =>
      <DataTableColumn
        key={i}
        data={column}
        onClick={onClick}
      />
    )

  return (
    <tbody>
      {renderColumns()}
    </tbody>
  )
}

export default DataTableBody