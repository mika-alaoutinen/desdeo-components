import {
  Bar,
  GroupedBar,
  StackedBar,
  ParallelAxes,
  Radar,
  Scatter,
  ScatterSelection,
  CoordinateTable,
  DataTable,
} from '../index'

describe('Chart components are exported', () => {
  it('Bar chart is truthy', () => {
    expect(Bar).toBeTruthy()
  })

  it('grouped bar chart is truthy', () => {
    expect(GroupedBar).toBeTruthy()
  })

  it('stacked bar chart is truthy', () => {
    expect(StackedBar).toBeTruthy()
  })

  it('parallel axes is truthy', () => {
    expect(ParallelAxes).toBeTruthy()
  })

  it('radar chart is truthy', () => {
    expect(Radar).toBeTruthy()
  })

  it('clickable scatter chart is truthy', () => {
    expect(Scatter).toBeTruthy()
  })

  it('scatter selection is truthy', () => {
    expect(ScatterSelection).toBeTruthy()
  })

  it('coordinate table is truthy', () => {
    expect(CoordinateTable).toBeTruthy()
  })

  it('data table is truthy', () => {
    expect(DataTable).toBeTruthy()
  })
})
