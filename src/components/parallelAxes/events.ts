import { Filter } from './ParallelAxes'

export interface DomainChange {
  activeDatasets: string[],
  filter: Filter,
  isFiltered: boolean
}

export type DomainTuple = [ number, number ]
export type OnDomainChange = (domain: DomainTuple) => void

export const onDomainChange = (domain: DomainTuple, filter: Filter): DomainChange => ({
  activeDatasets: [],
  filter: addNewFilters(domain, filter),
  isFiltered: false
})

// Utility functions
const addNewFilters = (domain: DomainTuple, filter: Filter): Filter => {
  const extent = domain && Math.abs(domain[1] - domain[0])
  const minVal = 1 / Number.MAX_SAFE_INTEGER
  // filter[name] = extent <= minVal ? undefined : domain
  return {
    ...filter,
    range: extent <= minVal ? undefined : domain
  }
}