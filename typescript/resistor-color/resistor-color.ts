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
] as const

type ColorNames = (typeof COLORS)[number]

export const colorCode = (colorName: ColorNames): number =>
  COLORS.indexOf(colorName)
