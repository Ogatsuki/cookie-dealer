'use client'

import Explains from "./(components)/explains";
import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Choices from "./(components)/choices";
import { useState, useEffect } from "react";
import { updatePosition } from '../utils/context/gameContext';


export default function Home() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isNextStep, setIsNextStep] = useState<boolean | null>(null);
  const [previewState, setPreviewState] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isNextStep !== null) {
      updatePosition(levelIndex, stepIndex, isNextStep, setStepIndex, setLevelIndex, setIsNextStep);
    }
  }, [isNextStep])

  return (
    <div className="p-4 flex justify-center flex-1">
      <div className="w-full max-w-4xl flex flex-col">
        <Explains levelIndex={levelIndex} stepIndex={stepIndex} />
        <MoreInfo levelIndex={levelIndex} stepIndex={stepIndex} />
        <Preview levelIndex={levelIndex} stepIndex={stepIndex} previewState={previewState} />
        <Choices
          levelIndex={levelIndex}
          stepIndex={stepIndex}
          setLevelIndex={setLevelIndex}
          setStepIndex={setStepIndex}
          setIsNextStep={setIsNextStep}
          setPreviewState={setPreviewState}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          />
      </div>
    </div>
  );
}
