import React from 'react'

import { DataTableClickHandler } from './DataTable'
import DataTableRow from './DataTableRow'

interface Props {
  data: number[],
  onClick: DataTableClickHandler
}

const DataTableColumn: React.FC<Props> = ({ data, onClick }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(value =>
      <DataTableRow
        key={value}
        row={value}
        onClick={onClick}
      />
    )

  return (
    <tr>
      {renderRows()}
    </tr>
  )
}

export default DataTableColumn