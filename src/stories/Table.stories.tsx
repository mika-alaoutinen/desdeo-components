import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Table from '../components/table/Table'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
import { EventHandler } from '../types/dataTypes'

export const TableWithUseState = (): JSX.Element => {
  const [ data, setData ] = useState(testdata)
  const eventHandler: EventHandler = {
    type: 'USE_STATE',
    callback: setData
  }

  return (
    <Table
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const TableWithRedux = (): JSX.Element => {
  const eventHandler: EventHandler = {
    type: 'REDUX',
    callback: printDatum
  }

  return (
    <Table
      data={testdata}
      eventHandler={eventHandler}
    />
  )
}

export default {
  title: 'DESDEO/Table',
  component: Table
} as Meta