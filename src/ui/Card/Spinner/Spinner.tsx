import { Text } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

interface Props {
  currentFilterIndex: number
  amountOfFilters: number
  currentFilterLabel: string
}

const SpinnerComponent = ({ currentFilterIndex, amountOfFilters, currentFilterLabel }: Props) => (
  <Text>
    <Text color="green">
      {' '}
      <Spinner type="arc" />
    </Text>{' '}
    <Text>
      [{currentFilterIndex}/{amountOfFilters}]
    </Text>{' '}
    <Text>{currentFilterLabel}</Text>
  </Text>
)

export { SpinnerComponent as Spinner }
