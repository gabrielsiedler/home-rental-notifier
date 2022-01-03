import { Text, Box } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

interface Props {
  s: number
}

export const Waiting = ({ s }: Props) => (
  <Box justifyContent="flex-start" alignItems="flex-start">
    <Text>
      {' '}
      <Spinner type="arc" /> <Text>{s} s</Text>
    </Text>
  </Box>
)
