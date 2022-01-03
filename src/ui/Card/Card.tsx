import { Box } from 'ink'
import React, { useState, useEffect } from 'react'

import { Source } from '../../sources-manager'
import { Spacer } from '../shared/Spacer'
import { RunSummary } from './RunSummary/RunSummary'
import { Spinner } from './Spinner/Spinner'
import { StatusSummary } from './StatusSummary/StatusSummary'
import { Title } from './Title/Title'
import { Waiting } from './Waiting/Waiting'

interface Props {
  source: Source
  key: any
}

export const Card = ({
  source: { name, runs, found, errors, lastRunStatus, status, currentFilter, totalFilters },
}: Props) => {
  const [timer, setTimer] = useState(Math.round(Math.random() * (23 - 7) + 7))

  useEffect(() => {
    const _t = setInterval(() => {
      let _prevTimer
      setTimer((prevTimer) => {
        _prevTimer = prevTimer

        if (prevTimer <= 0) return 0

        return prevTimer - 1
      })

      if (_prevTimer <= 0) {
        clearInterval(_t)
      }
    }, 1000)

    return () => clearInterval(_t)
  }, [])

  return (
    <Box borderStyle="single" flexDirection="column" width={33} padding={1}>
      <Title title={name} />
      <Spacer />
      <RunSummary runs={runs} found={found} errors={errors} />
      <Spacer />
      <StatusSummary last={lastRunStatus} status={status} />
      <Spacer />
      {timer > 0 ? (
        <Waiting s={timer} />
      ) : (
        <Spinner
          currentFilterIndex={currentFilter.index}
          amountOfFilters={totalFilters}
          currentFilterLabel={currentFilter.label}
        />
      )}
    </Box>
  )
}
