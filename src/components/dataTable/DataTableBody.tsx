import React from 'react'

import { DataTableClickHandler } from './DataTable'
import { DataSet } from '../../types/dataTypes'
import DataTableBodyRow from './DataTableBodyRow'

interface Props {
  data: DataSet,
  onClick: DataTableClickHandler
}

const DataTableBody: React.FC<Props> = ({ data, onClick }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(column =>
      <DataTableBodyRow
        key={column.label}
        column={column.data}
        onClick={onClick}
      />
    )

  return (
    <tbody>
      {renderRows()}
    </tbody>
  )
}

export default DataTableBody