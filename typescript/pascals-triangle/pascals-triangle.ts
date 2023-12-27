/*
1. [[1]]
2. [[1], [1, 1]]
3. [[1], [1, 1], [1, 2, 1]]
4. [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
5. [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
6. [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]

*/

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
