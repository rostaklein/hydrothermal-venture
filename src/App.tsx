import { useMemo, useState } from "react";
import { Canvas } from "./canvas/Canvas";
import { EXAMPLE_INPUT } from "./constants";
import { HydroThermalVentureCalc } from "./solution";
import * as S from "./styles";
import { parseAndClearInputData } from "./utils";

function App() {
  const [input, setInput] = useState(EXAMPLE_INPUT);
  const [result, setResult] = useState<number | null>(null);
  const [includeDiagonal, setIncludeDiagonal] = useState(true);

  const { board, boardSize } = useMemo(() => {
    const calc = new HydroThermalVentureCalc(parseAndClearInputData(input), {
      includeDiagonal,
    });

    const result = calc.run();

    setResult(result);

    return {
      boardSize: calc.boardSize,
      board: calc.board,
    };
  }, [input, includeDiagonal]);

  return (
    <S.MainWrapper>
      <S.Header>
        <h1 style={{ marginBottom: 0 }}>🎄 Hydrothermal Venture 🌊 </h1>
        <sub>Advent of Code 2021, day 5</sub>
      </S.Header>
      <div style={{ display: "flex" }}>
        <S.InputAreaWrapper>
          <h2>Input</h2>
          <div style={{ marginBottom: 16 }}>
            <input
              type="checkbox"
              name="diagonal"
              id="diagonal"
              checked={includeDiagonal}
              onChange={() => setIncludeDiagonal(!includeDiagonal)}
            />
            <label htmlFor="diagonal">include diagonal lines</label>
          </div>
          <S.Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </S.InputAreaWrapper>
        <S.SolutionAreaWrapper>
          <h2>Solution</h2>
          <p>
            At least two points overlap for <code>{result}</code> points
          </p>
          <S.CanvasWrapper>
            <Canvas boardSize={boardSize} board={board} />
          </S.CanvasWrapper>
        </S.SolutionAreaWrapper>
      </div>
    </S.MainWrapper>
  );
}

export default App;
