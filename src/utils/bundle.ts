import chalk from 'chalk'

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const error = chalk.hex('#FF0000')

export const round = (num: number) => Math.round(num * 100) / 100
