const GRID_COLOR = "#eee";
const DEFAULT_GRID_SIZE = 50;

type Options = {
  columns: number;
  rows: number;
};

export class CanvasPainter {
  private gridSize: number = DEFAULT_GRID_SIZE;

  constructor(private ctx: CanvasRenderingContext2D, private options: Options) {
    const maxGrid = Math.max(options.columns, options.rows);
    if (maxGrid > 500) {
      this.gridSize = 10;
    } else if (maxGrid > 100) {
      this.gridSize = 20;
    }
  }

  public draw() {
    this.setCanvasSize();
    this.makeGrid();
  }

  private setCanvasSize() {
    this.ctx.canvas.width = this.gridSize * this.options.columns;
    this.ctx.canvas.height = this.gridSize * this.options.rows;

    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private makeGrid() {
    for (let i = 1; i < this.options.columns; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.gridSize, 0);
      this.ctx.lineTo(i * this.gridSize, this.ctx.canvas.height);
      this.ctx.strokeStyle = GRID_COLOR;
      this.ctx.stroke();
    }

    for (let i = 1; i < this.options.rows; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.gridSize);
      this.ctx.lineTo(this.ctx.canvas.width, i * this.gridSize);
      this.ctx.strokeStyle = GRID_COLOR;
      this.ctx.stroke();
    }
  }

  private type(text: string) {
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#000";
    this.ctx.font = "26px Arial";
    this.ctx.fillText(text, this.gridSize / 2, this.gridSize / 2 + 9);
  }
}
