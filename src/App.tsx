import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";
import { EXAMPLE_INPUT } from "./constants";
import * as S from "./styles";

function App() {
  const [input, setInput] = useState(EXAMPLE_INPUT);
  useEffect(() => {
    document.title = "Hydrothermal Venture";
  });
  return (
    <S.MainWrapper>
      <S.Header>
        <h1 style={{ marginBottom: 0 }}>🎄 Hydrothermal Venture 🌊 </h1>
        <sub>Advent of Code 2021, day 5</sub>
      </S.Header>
      <S.InputAreaWrapper>
        <h2>Input</h2>
        <S.Textarea value={input} onChange={(e) => setInput(e.target.value)} />
      </S.InputAreaWrapper>
      <S.SolutionAreaWrapper>
        <h2>Solution</h2>
        <Canvas />
      </S.SolutionAreaWrapper>
    </S.MainWrapper>
  );
}

export default App;
