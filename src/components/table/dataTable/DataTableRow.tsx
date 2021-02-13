import React from 'react'

import { DataTableClickHandler } from './DataTable'
import { padding } from '../tableStyles'

interface Props {
  row: number,
  onClick: DataTableClickHandler
}

const DataTableRow: React.FC<Props> = ({ row, onClick }) => (
  <td
    key={row}
    onClick={() => onClick(row)}
    style={padding}
  >
    {row}
  </td>
)

export default DataTableRow