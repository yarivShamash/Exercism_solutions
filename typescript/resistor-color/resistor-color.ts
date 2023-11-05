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

export const colorCode = (colorName: string): number =>
    COLORS.indexOf(colorName)
