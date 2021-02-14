import { testdata } from '../../tests/testdata'
import { BarChartWrapperProps } from '../../types/chartTypes'

export const props: BarChartWrapperProps = {
  data: testdata,
  grouping: 'alternatives',
  onClick: (coordinate) => console.log('coordinate', coordinate),
  orientation: 'horizontal'
}