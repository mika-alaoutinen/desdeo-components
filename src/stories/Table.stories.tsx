import React from 'react'
import { Meta } from '@storybook/react'

import Table from '../components/table/Table'
import { useOnClickReactHandler } from './storyUtils'

export const TableWithUseState = (): JSX.Element => {
  const { data, onClick } = useOnClickReactHandler()

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