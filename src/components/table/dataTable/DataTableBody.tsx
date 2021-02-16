import React from 'react'

import { DataTableClickHandler } from './DataTable'
import DataTableColumn from './DataTableColumn'
import { Value } from '../../../types/dataTypes'

interface Props {
  data: Value[][],
  onClick: DataTableClickHandler
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