import { Box, Color, Text } from 'ink'
import React from 'react'

interface Props {
  console: string[]
}

export const Console = ({ console }: Props) => {
  return (
    <Box width="100%" flexDirection="column">
      {console.map((line) => (
        <Text key={line}>
          <Color lightgrey>[13:25:14]</Color> {line}
        </Text>
      ))}
    </Box>
  )
}
