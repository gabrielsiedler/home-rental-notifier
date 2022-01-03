import { Box, render, Text } from 'ink'
import BigText from 'ink-big-text'
import React from 'react'

import manager, { Source } from '../sources-manager'
import { Card } from './Card/Card'
import { Console } from './Console/Console'
import { Spacer } from './shared/Spacer'

const App = () => {
  const cards = Object.keys(manager).map((key) => {
    const source: Source = manager[key]

    return <Card key={source.name} source={source} />
  })

  const console = [
    `This is something 1`,
    `This is something 2`,
    `This is something 3`,
    `This is something 4`,
    `This is something 5`,
  ]

  return (
    <Box flexDirection="column" justifyContent="center" alignItems="center">
      <BigText text="HRN" />
      <Text>House rental notifier</Text>
      <Spacer />
      <Box>{cards.slice(0, 7)}</Box>
      <Spacer />
      <Box>{cards.slice(7, 14)}</Box>
      <Spacer />
      <Spacer />
      <Console console={console} />
    </Box>
  )
}

const enterAltScreenCommand = '\x1b[?1049h'
const leaveAltScreenCommand = '\x1b[?1049l'

process.stdout.write(enterAltScreenCommand)
process.on('exit', () => {
  process.stdout.write(leaveAltScreenCommand)
})

render(<App />)
