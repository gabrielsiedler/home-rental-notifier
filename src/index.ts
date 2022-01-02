import chalk from 'chalk'
import dotenv from 'dotenv'
import { Entry } from './models/Entry'

import { mongooseSetup } from './setup/db'
import { twilioSetup } from './setup/twilio'
import * as worker from './worker'

dotenv.config()

const start = async () => {
  await twilioSetup()
  await mongooseSetup()

  worker.start()
}

// start()

const ui = (data) => {
  var term = require('terminal-kit').terminal

  term.clear()
  term.table(
    [
      [
        `^B${data.source}\n\nRan ${data.ran} times\nFound ${data.success} houses\nErrors: ${data.error}\n\nCurrent: Itacorubi ^dotSpinner`,
        'header #2',
        'header #3',
      ],
      ['row #1', 'a much bigger cell, a much bigger cell, a much bigger cell... ', 'cell'],
      ['row #2', 'cell', 'a medium cell'],
      ['row #3', 'cell', 'cell'],
      ['row #4', 'cell\nwith\nnew\nlines', '^YThis ^Mis ^Ca ^Rcell ^Gwith ^Bmarkup^R^+!'],
    ],
    {
      hasBorder: true,
      contentHasMarkup: true,
      borderChars: 'lightRounded',
      borderAttr: { color: 'grey' },
      textAttr: { bgColor: 'default' },
      width: 100,
      fit: true, // Activate all expand/shrink + wordWrap
    },
  )

  setTimeout(() => {}, 5000)
}

const gather = async () => {
  await mongooseSetup()

  const entries = await Entry.find({ source: 'Olx' })

  let ran = 0
  let success = 0
  let error = 0

  entries.forEach((entry) => {
    ran += entry.runs.length
    success += entry.runs.filter((e) => e.status === 'found').length
    error += entry.runs.filter((e) => e.status === 'error').length
  })

  ui({ source: 'Olx', ran, success, error })
}

gather()
