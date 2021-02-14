import { Props } from '../../components/scatter/ScatterChartWrapper'
import { datasetTuple } from '../../tests/testdata'

// Used to configure Storybook's Controls view
export const argTypes = {
  data: {
    control: {
      type: 'object'
    }
  },
  onClick: {
    table: {
      disable: true
    }
  },
}

export const props: Props = {
  data: datasetTuple,
  onClick: (coordinate) => console.log('coordinate', coordinate),
}