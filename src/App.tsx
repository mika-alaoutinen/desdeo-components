import React from 'react'

import BarChart from './components/barChart/BarChart'
import { data } from './components/barChart/data'

const App: React.FC = () => {

  return (
    <div>
      <BarChart props={{
        data
      }}/>
    </div>
  )
}

export default App