import React from 'react'

import { DataTableClickHandler } from './DataTable'
import DataTableBodyColumn from './DataTableBodyColumn'

interface Props {
  data: number[][],
  onClick: DataTableClickHandler
}

const DataTableBody: React.FC<Props> = ({ data, onClick }) => {

  const renderRows = (): JSX.Element[] =>
    data.map((column, i) =>
      <tr key={i}>
        {<DataTableBodyColumn
          data={column}
          onClick={onClick}
        />}
      </tr>
    )

  return (
    <tbody>
      {renderRows()}
    </tbody>
  )
}

export default DataTableBody