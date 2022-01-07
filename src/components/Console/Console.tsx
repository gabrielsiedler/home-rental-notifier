import { Box, Text } from 'ink'
import React from 'react'

import { useStateValue } from '../../state'

export const Console = () => {
  // const [entries, setEntries] = useState(uiConsole.entries)

  // useEffect(() => {
  //   setEntries(uiConsole.entries)
  // }, [uiConsole.entries])

  const [{ console }] = useStateValue()

  return (
    <Box flexGrow={1} borderStyle="round" marginLeft={2} flexDirection="column">
      {(console ?? []).map((line) => (
        <Text key={line}>{line}</Text>
      ))}
    </Box>
  )
}
