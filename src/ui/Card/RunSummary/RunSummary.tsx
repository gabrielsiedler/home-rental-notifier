import { Text } from 'ink'
import React from 'react'

interface Props {
  runs: number
  found: number
  errors: number
}

export const RunSummary = ({ runs, found, errors }: Props) => (
  <>
    <Text>
      <Text bold>Runs:</Text> <Text color="grey">{runs}</Text>
    </Text>
    <Text>
      Found: <Text color="green">{found}</Text>
    </Text>
    <Text>
      Errors: <Text color="red">{errors}</Text>
    </Text>
  </>
)
