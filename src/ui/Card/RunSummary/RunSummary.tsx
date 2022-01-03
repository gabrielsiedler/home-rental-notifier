import { Text, Color } from 'ink'
import React from 'react'

interface Props {
  runs: number
  found: number
  errors: number
}

export const RunSummary = ({ runs, found, errors }: Props) => (
  <>
    <Text>
      <Text bold>Runs:</Text>{' '}
      <Color grey>
        <Text>{runs}</Text>
      </Color>
    </Text>
    <Text>
      Found:{' '}
      <Color green>
        <Text>{found}</Text>
      </Color>
    </Text>
    <Text>
      Errors:{' '}
      <Color red>
        <Text color="red">{errors}</Text>
      </Color>
    </Text>
  </>
)
