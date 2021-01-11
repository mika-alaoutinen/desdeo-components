import { Domain } from 'domain'
import { Filter } from './ParallelAxesChart'

export interface DomainChange {
  activeDatasets: string[],
  filter: Filter,
  isFiltered: boolean
}

export type OnDomainChange = (domain: Domain) => void

export const onDomainChange = (domain: Domain, filter: Filter): DomainChange => ({
  activeDatasets: [],
  filter: addNewFilters(domain, filter),
  isFiltered: false
})

// Utility functions
const addNewFilters = (domain: Domain, filter: Filter): Filter => {
  const extent = domain && Math.abs(domain[1] - domain[0])
  const minVal = 1 / Number.MAX_SAFE_INTEGER
  // filter[name] = extent <= minVal ? undefined : domain
  return {
    ...filter,
    range: extent <= minVal ? undefined : domain
  }
}

// Private types
type Domain = [ number, number ]