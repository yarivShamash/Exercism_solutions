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
      const prevLine = this.triangle[i] || [1]
      // go over the items on the prevLine
      // if the item is the first OR the last number of the array, keep it as it is
      // else, add the number at the current position to the number in the next position: prevLine[i] + prevLine[i - 1]

      const currentLine = prevLine.map((item, index) => {
        if (index === 0) {
          return item
        }
        return item + prevLine[index - 1]
      })

      this.triangle.push([...currentLine, 1])
      i++
    }
  }

  rows(): number[][] {
    return this.triangle
  }

  lastRow(): number[] {
    return this.triangle.at(-1) || [1]
  }
}
