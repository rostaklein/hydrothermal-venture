import { Board } from "../solution";

const GRID_COLOR = "#eee";
const DEFAULT_GRID_SIZE = 50;
const DEFAULT_FONT_SIZE = 24;

type Options = {
  columns: number;
  rows: number;
};

export class CanvasPainter {
  constructor(
    private ctx: CanvasRenderingContext2D,
    private board: Board,
    private options: Options
  ) {}

  private get gridSize() {
    const maxGrid = Math.max(this.options.columns, this.options.rows);
    if (maxGrid > 500) {
      return 10;
    }
    if (maxGrid > 100) {
      return 20;
    }
    return DEFAULT_GRID_SIZE;
  }

  private get fontSize() {
    return (this.gridSize / DEFAULT_GRID_SIZE) * DEFAULT_FONT_SIZE;
  }

  public draw() {
    this.setCanvasSize();
    this.makeGrid();
    this.putNumbers();
  }

  private setCanvasSize() {
    this.ctx.canvas.width = this.gridSize * (this.options.columns + 1);
    this.ctx.canvas.height = this.gridSize * (this.options.rows + 1);

    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private makeGrid() {
    for (let i = 1; i <= this.options.columns; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.gridSize, 0);
      this.ctx.lineTo(i * this.gridSize, this.ctx.canvas.height);
      this.ctx.strokeStyle = GRID_COLOR;
      this.ctx.stroke();
    }

    for (let i = 1; i <= this.options.rows; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.gridSize);
      this.ctx.lineTo(this.ctx.canvas.width, i * this.gridSize);
      this.ctx.strokeStyle = GRID_COLOR;
      this.ctx.stroke();
    }
  }

  private putNumbers() {
    for (const [coordinate, count] of this.board) {
      const [x, y] = coordinate.split(",");
      this.type(String(count), Number(x), Number(y));
    }
  }

  private type(text: string, x: number, y: number) {
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#000";
    this.ctx.font = `${this.fontSize}px monospace`;
    const offset = this.fontSize * 0.3;
    this.ctx.fillText(
      text,
      this.gridSize / 2 + x * this.gridSize,
      this.gridSize / 2 + offset + y * this.gridSize
    );
  }
}
