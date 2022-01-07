import { Box, Text, Color } from 'ink'
import React from 'react'

interface Props {
  title: string
}

export const Title = ({ title }: Props) => (
  <Box justifyContent="center" alignItems="center" height={2}>
    <Color blue>
      <Text bold>{title}</Text>
    </Color>
  </Box>
)
