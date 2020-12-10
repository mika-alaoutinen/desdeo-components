export interface Props {
  data: TestData[],
  onClick?: () => void
}

export interface TestData {
  year: number,
  data: DataRow[]
}

interface DataRow {
  quarter: number,
  earnings: number
}
