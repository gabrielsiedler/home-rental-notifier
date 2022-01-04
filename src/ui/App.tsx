import { Box, render, Text } from 'ink'
import BigText from 'ink-big-text'
import React from 'react'

import { Source } from '../services/Source'
import sources from '../services/source-manager'
import { Card } from './Card/Card'
import { Console } from './Console/Console'
import { Spacer } from './shared/Spacer'

const { Provider, createStore } = require('redux')

const store = createStore((state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
})

const App = () => {
  const cards = Object.keys(sources).map((key) => {
    const source: Source = sources[key]

    return <Card key={source.name} source={source} />
  })

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

render(
  <Provider store={store}>
    <App />
  </Provider>,
)
