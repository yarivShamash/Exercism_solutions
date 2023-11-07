export class Matrix {
  private matrix: number[][] = []
  private matrixByColumn: number[][] = []

  constructor(matrix: string) {
    const matrixRows = matrix.split('\n')
    this.matrix = matrixRows.map((matrixRow) => {
      return matrixRow.split(' ').map((value) => Number(value))
    })
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    this.matrix.forEach(
      (row) => {
        row.forEach((number, index) => {
          if (!this.matrixByColumn[index]) {
            this.matrixByColumn[index] = []
          }
          this.matrixByColumn[index].push(number)
        })
        return this.matrixByColumn
      },
      Array.from({ length: this.matrix[0].length }, (): number[] => [])
    )

    return this.matrixByColumn
  }
}
