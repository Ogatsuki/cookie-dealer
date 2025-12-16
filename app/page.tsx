'use client'

import Explains from "./(components)/explains";
import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Options from "./(components)/options";
import Buttons from "./(components)/buttons";
import { useState, useEffect } from "react";




export default function Home() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [movingDirection, setMovingDirection] = useState<"forward" | "backward" | null>(null);

  useEffect(() => {

  }, [movingDirection])

  return (
    <div className="p-4 flex justify-center flex-1">
      <div className="w-full max-w-4xl flex flex-col">
        <Explains levelIndex={levelIndex} stepIndex={stepIndex} />
        <MoreInfo levelIndex={levelIndex} stepIndex={stepIndex} />
        <Preview levelIndex={levelIndex} stepIndex={stepIndex} />
        <Options levelIndex={levelIndex} stepIndex={stepIndex} />
        <Buttons levelIndex={levelIndex} stepIndex={stepIndex} movingDirection={movingDirection} />
      </div>
    </div>
  );
}
