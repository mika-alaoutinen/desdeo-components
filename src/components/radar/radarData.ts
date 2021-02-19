import { Attribute } from '../../types/dataTypes'

export const characterData = [
  {
    wq_fishery: 6.042483,
    wq_city: 3.17527,
    roi: 6.090291,
    city_tax: 2.444406,
    plant_resources: 0.248895,
  },
  {
    wq_fishery: 5.758127,
    wq_city: 3.410843,
    roi: 6.887735,
    city_tax: 8.989781,
    plant_resources: 0.346752,
  },
  {
    wq_fishery: 6.287081,
    wq_city: 3.207926,
    roi: 2.992514,
    city_tax: 2.758216,
    plant_resources: 0.326688,
  },
]

export type RadarDataSet = RadarData[][]

interface RadarData {
  label: string
  attribute: Attribute
}

export const radarData: RadarDataSet = [
  [
    {
      label: 'WQ Fishery',
      attribute: { id: 'wq-fishery-0', x: 'wq-fishery', y: 0.9610951409724163 },
    },
    {
      label: 'WQ City',
      attribute: { id: 'wq-city-0', x: 'wq-city', y: 0.9309340828645587 },
    },
  ],
  [
    {
      label: 'WQ Fishery',
      attribute: { id: 'wq-fishery-1', x: 'wq-fishery', y: 0.9158665205681301 },
    },
    {
      label: 'WQ City',
      attribute: { id: 'wq-city-1', x: 'wq-city', y: 1 },
    },
  ],
]
