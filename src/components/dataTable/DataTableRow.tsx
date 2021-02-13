import React from 'react'

import { DataTableClickHandler } from './DataTable'

interface Props {
  row: number,
  onClick: DataTableClickHandler
}

const DataTableRow: React.FC<Props> = ({ row, onClick }) => (
  <td key={row} onClick={() => onClick(row)}>
    {row}
  </td>
)

export default DataTableRow