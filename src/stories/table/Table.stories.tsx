import React from 'react'
import { Meta } from '@storybook/react'

import Table from '../../components/table/Table'
import { useOnClickHandler } from '../storyUtils'

export const TableComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <Table
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta