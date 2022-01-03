import { Box, render } from 'ink'
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

  return (
    <Box flexDirection="column" justifyContent="center" alignItems="center">
      <Box>{cards.slice(0, 7)}</Box>
      <Spacer />
      <Box>{cards.slice(7, 14)}</Box>
      <Spacer />
      <Spacer />
      <Console />
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
