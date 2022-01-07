import { Box, Color, Text } from 'ink'
import React, { useState, useEffect } from 'react'
import uiConsole from '../../services/Console'
import { useStateValue } from '../../state'

export const Console = () => {
  // const [entries, setEntries] = useState(uiConsole.entries)

  // useEffect(() => {
  //   setEntries(uiConsole.entries)
  // }, [uiConsole.entries])

  const [{ console }] = useStateValue()

  return (
    <Box width="100%" flexDirection="column">
      {console.map((line) => (
        <Text key={line}>{line}</Text>
      ))}
    </Box>
  )
}
