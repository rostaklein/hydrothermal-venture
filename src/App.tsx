import { useEffect, useMemo, useState } from "react";
import { Canvas } from "./canvas/Canvas";
import { EXAMPLE_INPUT } from "./constants";
import { HydroThermalVentureCalc } from "./solution";
import * as S from "./styles";
import { parseAndClearInputData } from "./utils";

function App() {
  const [input, setInput] = useState(EXAMPLE_INPUT);
  useEffect(() => {
    document.title = "Hydrothermal Venture";
  });

  const result = useMemo(() => {
    const calc = new HydroThermalVentureCalc(parseAndClearInputData(input));

    calc.run();
    console.log(calc.boardSize);

    return {
      boardSize: calc.boardSize,
      board: calc.board,
    };
  }, [input]);

  return (
    <S.MainWrapper>
      <S.Header>
        <h1 style={{ marginBottom: 0 }}>🎄 Hydrothermal Venture 🌊 </h1>
        <sub>Advent of Code 2021, day 5</sub>
      </S.Header>
      <div style={{ display: "flex" }}>
        <S.InputAreaWrapper>
          <h2>Input</h2>
          <S.Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </S.InputAreaWrapper>
        <S.SolutionAreaWrapper>
          <h2>Solution</h2>
          <S.CanvasWrapper>
            <Canvas boardSize={result.boardSize} board={result.board} />
          </S.CanvasWrapper>
        </S.SolutionAreaWrapper>
      </div>
    </S.MainWrapper>
  );
}

export default App;
