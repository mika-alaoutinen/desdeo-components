import React from 'react'

import { DataTableClickHandler } from './DataTable'

interface Props {
  data: number[],
  onClick: DataTableClickHandler
}

const DataTableBodyColumn: React.FC<Props> = ({ data, onClick }) => {
  console.log('column', data)

  const renderRow = (): JSX.Element[] =>
    data.map(value =>
      <td
        key={value}
        onClick={() => onClick(value)}
      >
        {value}
      </td>
    )

  return (
    <tr>
      {renderRow()}
    </tr>
  )
}

export default DataTableBodyColumn