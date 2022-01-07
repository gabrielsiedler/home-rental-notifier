import { Box, Text } from 'ink'
import React from 'react'

interface Props {
  title: string
}

export const Title = ({ title }: Props) => (
  <Box justifyContent="center" alignItems="center" height={2}>
    <Text color="blue" bold>
      {title}
    </Text>
  </Box>
)
