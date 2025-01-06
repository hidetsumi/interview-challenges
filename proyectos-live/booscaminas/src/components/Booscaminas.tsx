import { useMemo, useState } from "react";

interface Casilla {
  position: number;
  active: boolean;
}

interface BooscaminasProp {
  gridDimension?: number;
  pumpkins?: number;
  enableFlags?: boolean;
}

export const Booscaminas = ({
  pumpkins = 3,
  enableFlags = false,
  gridDimension = 10,
}: BooscaminasProp) => {
  const initialGameState = useMemo(() => {
    const pumpkinsInitialState = new Array(pumpkins)
      .fill(0)
      .map(() => Math.floor(Math.random() * (gridDimension * gridDimension)));

    const initialGameState = new Array(gridDimension * gridDimension)
      .fill(0)
      .map((grid, position) => ({
        position,
        active: pumpkinsInitialState.includes(position),
      }));

    return initialGameState;
  }, [gridDimension, pumpkins]);

  // const [gameState, setGameState] = useState<Casilla[]>(initialGameState);

  console.log([...initialGameState.filter((pump) => pump.active)]);

  return (
    <div className={`grid grid-cols-${gridDimension} gap-1`}>
      {initialGameState.map((grid, i) => (
        <div
          key={i}
          className="flex justify-center items-center w-[50px] h-[50px] border border-orange-400"
        >
          {grid.active} {grid.position}
        </div>
      ))}
    </div>
  );
};
