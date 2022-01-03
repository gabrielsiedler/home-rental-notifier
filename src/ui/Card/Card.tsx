import { Box } from 'ink'
import React from 'react'

import { Source } from '../../sources-manager'
import { Spacer } from '../shared/Spacer'
import { RunSummary } from './RunSummary/RunSummary'
import { Spinner } from './Spinner/Spinner'
import { StatusSummary } from './StatusSummary/StatusSummary'
import { Title } from './Title/Title'

interface Props {
  source: Source
  key: any
}

export const Card = ({
  source: { name, runs, found, errors, lastRunStatus, status, currentFilter, totalFilters },
}: Props) => (
  <Box borderStyle="single" width={33} flexDirection="column">
    <Title title={name} />
    <Spacer />
    <RunSummary runs={runs} found={found} errors={errors} />
    <Spacer />
    <StatusSummary last={lastRunStatus} status={status} />
    <Spacer />
    <Spinner
      currentFilterIndex={currentFilter.index}
      amountOfFilters={totalFilters}
      currentFilterLabel={currentFilter.label}
    />
  </Box>
)
