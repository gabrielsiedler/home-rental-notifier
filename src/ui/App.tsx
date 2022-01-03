import { Box, render, Text } from 'ink'
import React from 'react'

import manager, { Source } from '../sources-manager'
import { Card } from './Card/Card'
import { Console } from './Console/Console'

const App = () => {
  const cards = Object.keys(manager).map((key) => {
    const source: Source = manager[key]

    return <Card key={source.name} source={source} />
  })

  return (
    <Box flexDirection="column">
      <Box>{cards.slice(0, 7)}</Box>
      <Box>{cards.slice(7, 14)}</Box>
      <Console />
    </Box>
  )
}

const { clear } = render(<App />)

clear()
