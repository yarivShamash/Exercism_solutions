export class Triangle {
  private triangle: number[][] = []

  constructor(numberOfRows: number) {
    let i = 0
    while (i < numberOfRows) {
      const prevLine = this.triangle[i - 1] || []

      const currentLine = prevLine.map((item, index) => {
        if (index === 0) {
          return 1
        }
        return item + prevLine[index - 1]
      })

      this.triangle.push([...currentLine, 1])

      i++
    }
    this.lastRow = this.triangle.at(-1) || [1]
  }

  rows: number[][] = this.triangle

  lastRow: number[] = this.triangle.at(-1) || [1]
}
