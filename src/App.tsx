import { Box, render, Text } from 'ink'
import BigText from 'ink-big-text'
import React, { useEffect, useState } from 'react'

import { Console } from './components/Console/Console'
import { Spacer } from './components/shared/Spacer'
import { mongooseSetup } from './setup/db'
import { setupSources } from './setup/sources'
import { twilioSetup } from './setup/twilio'
import { StateProvider, useStateValue } from './state'
import { addEntry } from './state/console/actions'
import reducers from './state/reducers'
import * as worker from './worker'

// import { Source } from './services/Source'
// import sources from './setup/sources'
// import { Card } from './components/Card/Card'
const App = () => {
  const [loading, setLoading] = useState(true)
  const [_, dispatch] = useStateValue()

  const addToConsole = (message: string) => {
    dispatch(addEntry(message))
  }

  const loadModules = async () => {
    try {
      await twilioSetup(addToConsole)
      await mongooseSetup(addToConsole)
      await setupSources(addToConsole)

      setLoading(false)

      worker.start()
    } catch (e) {
      console.error('Error on startup', e)
    }
  }

  useEffect(() => {
    loadModules()
  })

  if (loading) {
    return (
      <Box flexDirection="column" justifyContent="center" alignItems="center">
        <BigText text="HRN" />
        <Text>Loading modules...</Text>
      </Box>
    )
  }

  // const cards = Object.keys(sources).map((key) => {
  //   const source: Source = sources[key]

  //   return <Card key={source.name} source={source} />
  // })

  return (
    <Box flexDirection="column">
      <BigText text="HRN" />
      <Text>House rental notifier</Text>
      <Spacer />
      {/* <Box>{cards.slice(0, 7)}</Box>
      <Spacer />
      <Box>{cards.slice(7, 14)}</Box>
      <Spacer />
      <Spacer /> */}
      <Console />
    </Box>
  )
}

// const clearAndSetCursor = '\u001b[2J\u001b[0;0H'
// const enterAltScreenCommand = '\x1b[?1049h'
// const leaveAltScreenCommand = '\x1b[?1049l'

// process.stdout.write(clearAndSetCursor)
// process.stdout.write(enterAltScreenCommand)
// process.on('exit', () => {
//   process.stdout.write(leaveAltScreenCommand)
// })

render(
  <StateProvider
    initialState={{ console: ['This is a test.', '*** Error occured.'] }}
    reducer={reducers}
    children={<App />}
  />,
)
