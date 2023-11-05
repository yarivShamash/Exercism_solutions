const errorMessage = `The color you passed is not in the list of colors.
        Try black, brown, red, orange, yellow, green, blue, violet, grey or white.`

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

export const colorCode = (colorName: string): number => {
  const colorIndex = COLORS.indexOf(colorName)
  if (colorIndex === -1) {
    throw new Error(errorMessage)
  }
  return colorIndex
}
