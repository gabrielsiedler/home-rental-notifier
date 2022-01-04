import { Text, Box } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

interface Props {
  currentFilterIndex: number
  amountOfFilters: number
  currentFilterLabel: string
}

const SpinnerComponent = ({ currentFilterIndex, amountOfFilters, currentFilterLabel }: Props) => (
  <Box>
    <Text>
      <Text>
        {' '}
        <Spinner type="triangle" />
      </Text>{' '}
      <Text>
        [{currentFilterIndex}/{amountOfFilters}]
      </Text>{' '}
      <Text>{currentFilterLabel}</Text>
    </Text>
  </Box>
)

export { SpinnerComponent as Spinner }
