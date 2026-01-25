'use client'

import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Choices from "./(components)/choices";
import Title from "./(components)/title";
import { useState, useEffect } from "react";
import { updatePosition } from '../utils/context/gameContext';


export default function Home() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  // isNextStep: null -> 初期状態、 1 -> 次のステップへ、 -1 -> 前のステップへ、 0 -> 現在のステップをDBに保存
  const [isNextStep, setIsNextStep] = useState<number | null>(null);
  const [previewState, setPreviewState] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isNextStep !== null) {
      updatePosition(levelIndex, stepIndex, isNextStep, setStepIndex, setLevelIndex, setIsNextStep);
    }
  }, [levelIndex, stepIndex, isNextStep, setIsNextStep, setStepIndex, setLevelIndex]);

  return (
    <div className="px-4 flex justify-center flex-1">
      <div className="w-full max-w-4xl flex flex-col">
        <Title
          levelIndex={levelIndex}
          stepIndex={stepIndex}
          setLevelIndex={setLevelIndex}
          setStepIndex={setStepIndex}
          setIsNextStep={setIsNextStep}
          setPreviewState={setPreviewState}
          setSelectedOptionIndex={setSelectedOptionIndex}
        />
        <Preview levelIndex={levelIndex} stepIndex={stepIndex} previewState={previewState} />
        <MoreInfo levelIndex={levelIndex} stepIndex={stepIndex} />
        <Choices
          levelIndex={levelIndex}
          stepIndex={stepIndex}
          setIsNextStep={setIsNextStep}
          previewState={previewState}
          setPreviewState={setPreviewState}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          />
      </div>
    </div>
  );
}
