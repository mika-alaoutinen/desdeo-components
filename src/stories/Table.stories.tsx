import React from 'react'
import { Meta } from '@storybook/react'

import Table from '../components/table/Table'
import TableNew from '../components/table/TableNew'
import { useOnClickReactHandler, useOnClickReduxHandler } from './storyUtils'

export const TableWithUseState = (): JSX.Element => {
  const { data, onClick } = useOnClickReactHandler()

  return (
    <Table
      data={data}
      onClick={onClick}
    />
  )
}

export const TableWithRedux = (): JSX.Element => {
  const { data, onClick } = useOnClickReduxHandler()

  return (
    <Table
      data={data}
      onClick={onClick}
    />
  )
}

export const SimpleTable = (): JSX.Element => {
  const { data, onClick } = useOnClickReactHandler()

  return (
    <TableNew
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta