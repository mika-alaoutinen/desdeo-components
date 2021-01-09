import React from 'react'

import ChartContainer from '../../containers/ChartContainer'
import { Datum } from '../../types/dataTypes'

// https://formidable.com/open-source/victory/gallery/parallel-brush-axes/

interface Props {
  data?: Datum[]
}

const ParallelAxes: React.FC<Props> = () => {

  return (
    <ChartContainer>

    </ChartContainer>
  )
}

export default ParallelAxes