import React from 'react'
import { Meta } from '@storybook/react'

import Table from '../components/table/Table'
import { TestEventHandler, useReactHandler, useReduxHandler } from './storyUtils'

export const TableWithUseState = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useReactHandler()
  
  return (
    <Table
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const TableWithRedux = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useReduxHandler()

  return (
    <Table
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta