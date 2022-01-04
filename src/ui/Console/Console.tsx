import { Box, Color, Text } from 'ink'
import React, { useState, useEffect } from 'react'
import uiConsole from '../../services/Console'

export const Console = () => {
  const [entries, setEntries] = useState(uiConsole.entries)

  useEffect(() => {
    setEntries(uiConsole.entries)
  }, [uiConsole.entries])

  return (
    <Box width="100%" flexDirection="column">
      {entries.map((line) => (
        <Text key={line}>{line}</Text>
      ))}
    </Box>
  )
}
