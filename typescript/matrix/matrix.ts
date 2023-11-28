export class Matrix {
  private matrix: number[][] = []

  constructor(matrix: string) {
    const matrixRows = matrix.split('\n')
    this.matrix = matrixRows.map((matrixRow) =>
      matrixRow.split(' ').map((value) => Number(value))
    )
  }

  get rows(): number[][] {
    return this.matrix
  }

  get columns(): number[][] {
    return this.matrix[0].map((_, columnIndex) =>
      this.matrix.map((row) => row[columnIndex])
    )
  }
}
