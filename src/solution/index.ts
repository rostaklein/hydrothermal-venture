type Position = [number, number];

type Instruction = {
  from: Position;
  to: Position;
};

type Coordinate = string; // like "8,8"

export type Board = Map<Coordinate, number>;

export class HydroThermalVentureCalc {
  private instructions: Instruction[];
  public board: Board = new Map();

  constructor(input: string[]) {
    this.instructions = input.map(this.parseInstruction);
  }

  public run(): number {
    this.coverBoardWithLines(this.instructions);

    return [...this.board.values()].filter((num) => num >= 2).length;
  }

  public get boardSize(): [number, number] {
    const maxX = Math.max(
      ...this.instructions
        .map((instr) => {
          return [instr.from[0], instr.to[0]];
        })
        .flat()
    );
    const maxY = Math.max(
      ...this.instructions
        .map((instr) => {
          return [instr.from[1], instr.to[1]];
        })
        .flat()
    );
    return [maxX, maxY];
  }

  private coverBoardWithLines(instructions: Instruction[]) {
    for (const instruction of instructions) {
      const fromX = instruction.from[0];
      const toX = instruction.to[0];

      const fromY = instruction.from[1];
      const toY = instruction.to[1];

      if (fromY === toY) {
        this.drawStraightLine(fromX, toX, "y", fromY);
        // console.log("Y straight", instruction);
      } else if (fromX === toX) {
        this.drawStraightLine(fromY, toY, "x", fromX);
        // console.log("X straight", instruction);
      } else {
        // console.count("diagonal");
        // console.log("diagonal", instruction);
        // this.drawDiagonalLine(instruction);
      }
    }
  }

  private drawStraightLine(
    from: number,
    to: number,
    otherCoordinate: "x" | "y",
    coordValue: number
  ) {
    const lowerNumber = from < to ? from : to;
    const higherNumber = from > to ? from : to;

    for (let i = lowerNumber; i <= higherNumber; i++) {
      const mapKey =
        otherCoordinate === "y"
          ? this.getMapKey(i, coordValue)
          : this.getMapKey(coordValue, i);
      this.markPositionVisited(mapKey);
    }
  }

  private drawDiagonalLine(instruction: Instruction) {
    const { from, to } = instruction;

    const directionX = from[0] < to[0] ? "forwards" : "backwards";
    const directionY = from[1] < to[1] ? "forwards" : "backwards";

    const distance = Math.abs(to[0] - from[0]);
    // console.log({ from, to });

    for (let i = 0; i <= distance; i++) {
      const movedX = directionX === "forwards" ? from[0] + i : from[0] - i;
      const movedY = directionY === "forwards" ? from[1] + i : from[1] - i;
      // console.log({ movedX, movedY });
      this.markPositionVisited(this.getMapKey(movedX, movedY));
    }
  }

  private markPositionVisited(mapKey: string) {
    const exists = this.board.get(mapKey);
    if (exists) {
      // console.log({ exists, mapKey });
      this.board.set(mapKey, exists + 1);
    } else {
      this.board.set(mapKey, 1);
    }
  }

  private getMapKey(x: number, y: number): Coordinate {
    return `${x},${y}`;
  }

  private parseInstruction(input: string): Instruction {
    const [rawFrom, rawTo] = input.split(" -> ");

    const from = rawFrom.split(",").map(Number) as [number, number];
    const to = rawTo.split(",").map(Number) as [number, number];

    return {
      from,
      to,
    };
  }
}
