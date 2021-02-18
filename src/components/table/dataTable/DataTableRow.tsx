import React from 'react'

import { padding } from '../tableStyles'
import { Value } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

interface Props {
  row: Value
  onClick: OnClickHandler
}

const DataTableRow: React.FC<Props> = ({ row, onClick }) => (
  <td key={row.id} onClick={() => onClick(row)} style={padding}>
    {row.value}
  </td>
)

export default DataTableRow
