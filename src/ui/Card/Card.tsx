import { Box } from 'ink'
import React from 'react'

import { Spacer } from '../shared/Spacer'
import { RunStatus, SourceStatus } from '../types'
import { RunSummary } from './RunSummary/RunSummary'
import { Spinner } from './Spinner/Spinner'
import { StatusSummary } from './StatusSummary/StatusSummary'
import { Title } from './Title/Title'

export const Card = () => (
  <Box borderStyle="round" width={33} flexDirection="column">
    <Title title="Brognoli" />
    <Spacer />
    <RunSummary runs={15} found={1} errors={0} />
    <Spacer />
    <StatusSummary last={RunStatus.Unchanged} status={SourceStatus.Running} />
    <Spacer />
    <Spinner currentFilterIndex={4} amountOfFilters={11} currentFilterLabel="Lagoa da Conceição" />
  </Box>
)
