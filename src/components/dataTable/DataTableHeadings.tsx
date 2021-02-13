import React from 'react'

import { padding } from '../table/tableStyles'

interface Props {
  labels: string[]
}

const DataTableHeadings: React.FC<Props> = ({ labels }) => {
  const renderHeadings = (): JSX.Element[] =>
    labels.map(label =>
      <th key={label} style={padding}>
        {label}
      </th>
    )

  return (
    <thead>
      <tr>
        {renderHeadings()}
      </tr>
    </thead>
  )
}

export default DataTableHeadings