import { useEffect, useRef } from "react";

interface ICanvasProps {}

const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  ctx.fill();
};

export const Canvas: React.FunctionComponent<ICanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d")!;
      console.log({ context });
      context.fillStyle = "#fff";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      draw(context);
    }

    console.log({ canvas });
  }, [canvasRef]);

  return <canvas width="500px" height="500px" ref={canvasRef} />;
};
