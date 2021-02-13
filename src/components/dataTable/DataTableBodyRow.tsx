import React from 'react'

import { DataTableClickHandler } from './DataTable'

interface Props {
  column: number[],
  onClick: DataTableClickHandler
}

const DataTableBodyRow: React.FC<Props> = ({ column, onClick }) => {
  const renderRows = (): JSX.Element[] =>
    column.map(value =>
      <tr
        key={value}
        onClick={() => onClick(value)}
      >
        {value}
      </tr>
    )

  return (
    <>
      {renderRows()}
    </>
  )
}

export default DataTableBodyRow