import { useEffect, useRef } from "react";
import { Board } from "../solution";
import { CanvasPainter } from "./draw";

interface ICanvasProps {
  boardSize: [number, number];
  board: Board;
}

export const Canvas: React.FunctionComponent<ICanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d")!;

      const painter = new CanvasPainter(context, {
        columns: props.boardSize[0],
        rows: props.boardSize[1],
      });

      painter.draw();
    }

    console.log({ canvas });
  }, [canvasRef, props.boardSize]);

  return <canvas ref={canvasRef} />;
};
