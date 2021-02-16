import React from 'react'

import { DataTableClickHandler } from './DataTable'
import { padding } from '../tableStyles'
import { Value } from '../../../types/dataTypes'

interface Props {
  row: Value,
  onClick: DataTableClickHandler
}

const DataTableRow: React.FC<Props> = ({ row, onClick }) => (
  <td
    key={row.id}
    onClick={() => onClick(row)}
    style={padding}
  >
    {row.value}
  </td>
)

export default DataTableRow