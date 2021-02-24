import React from 'react'

import DataTableRow from './DataTableRow'
import HoverableTableRow from '../HoverableTableRow'
import { Value } from '../../../types/dataTypes'
import { OnClickHandler } from '../../../types/eventHandlerTypes'

interface Props {
  data: Value[]
  onClick: OnClickHandler
}

const DataTableColumn: React.FC<Props> = ({ data, onClick }) => {
  const isAnyCellSelected = data.map(value => value.isSelected).some(Boolean)

  const renderRows = (): JSX.Element[] =>
    data.map(value => <DataTableRow key={value.id} row={value} onClick={onClick} />)

  return <HoverableTableRow rows={renderRows()} isSelected={isAnyCellSelected} />
}

export default DataTableColumn
