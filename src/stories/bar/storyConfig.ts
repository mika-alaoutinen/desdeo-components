import { testdata } from '../../tests/testdata'
import { BarChartWrapperProps } from '../../types/chartTypes'

// Used to configure Storybook's Controls view
const argTypes = {
  data: {
    control: {
      type: 'object'
    }
  },
  grouping: {
    control: {
      type: 'inline-radio',
      options: [ 'alternatives', 'criteria' ]
    }
  },
  onClick: {
    table: {
      disable: true
    }
  },
  orientation: {
    control: {
      type: 'inline-radio',
      options: [ 'horizontal', 'vertical' ]
    }
  }
}

const props: BarChartWrapperProps = {
  data: testdata,
  grouping: 'alternatives',
  onClick: (coordinate) => console.log('coordinate', coordinate),
  orientation: 'horizontal'
}

export { argTypes, props }