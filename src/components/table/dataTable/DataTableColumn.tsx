import React from 'react'

import DataTableRow from './DataTableRow'
import HoverableTableRow from '../HoverableTableRow'
import { DataTableClickHandler } from './DataTable'
import { Value } from '../../../types/dataTypes'

interface Props {
  data: Value[],
  onClick: DataTableClickHandler
}

const DataTableColumn: React.FC<Props> = ({ data, onClick }) => {

  const renderRows = (): JSX.Element[] =>
    data.map(value =>
      <DataTableRow
        key={value.id}
        row={value}
        onClick={onClick}
      />
    )

  return <HoverableTableRow rows={renderRows()} />
}

export default DataTableColumn