import { Text } from 'ink'
import React from 'react'

import { RunStatus, SourceStatus } from '../../types'

interface Props {
  last: RunStatus
  status: SourceStatus
}

export const StatusSummary = ({ last, status }: Props) => (
  <>
    <Text>
      Last: <Text>{last}</Text>
    </Text>
    <Text>Status: {status}</Text>
  </>
)
