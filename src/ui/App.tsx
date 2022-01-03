import { Box, render } from 'ink'
import React from 'react'

import { Card } from './Card/Card'

const App = () => {
  return (
    <Box>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      {/* <Link url="https://github.com/gabrielsiedler/home-rental-notifier">
        My <Text color="cyan">gabrielsiedler/home-rental-notifier</Text>
      </Link> */}
    </Box>
  )
}

const { clear } = render(<App />)

clear()
