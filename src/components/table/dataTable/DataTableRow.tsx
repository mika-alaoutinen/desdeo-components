import React from 'react'

import { cellStyle } from '../tableStyles'
import { Value } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

interface Props {
  value: Value
  onClick: OnClickHandler
}

const DataTableRow: React.FC<Props> = ({ value, onClick }) => {
  const { id, isSelected, value: numberValue } = value

  return (
    <td key={id} onClick={() => onClick(value)} style={cellStyle(isSelected)}>
      {numberValue}
    </td>
  )
}

export default DataTableRow
