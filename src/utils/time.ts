const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const applyVariation = (timeout: number, variation: number) => {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1
  const randomVariation = getRandomInt(0, variation)

  return timeout + randomVariation * plusOrMinus
}
