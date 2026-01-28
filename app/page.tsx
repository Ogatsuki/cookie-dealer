'use client'

import MoreInfo from "./(components)/moreinfo";
import Preview from "./(components)/preview";
import Choices from "./(components)/choices";
import Title from "./(components)/title";
import { useState, useEffect } from "react";
import { updatePosition } from '../utils/context/gameContext';
import { loadAchievedState } from '../utils/supabase/initialize';
import Explains from "./(components)/explains";

type t__loadAchievedResponse = {
  achievedLevelIndex: number | null;
  achievedStepIndex: number | null;
  error: { error: boolean ; message: string | null}
}


export default function Home() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  // isNextStep: null -> 初期状態、 1 -> 次のステップへ、 -1 -> 前のステップへ、 0 -> 同問題で状態が変化しただけ
  const [isNextStep, setIsNextStep] = useState<number | null>(null);
  const [previewState, setPreviewState] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  // 最初にachievedをDBからロードする必要がある。また、ロードしたachievedに基づいて、isBtnNextDisabledを設定する必要がある
  const [achievedLevelIndex, setAchievedLevelIndex] = useState<number | null>(null);
  const [achievedStepIndex, setAchievedStepIndex] = useState<number | null>(null);
  // const achievedL: t__loadAchievedResponse = await loadAchievedState()

  useEffect(() => {
    const init = async () => {
      const { achievedLevelIndex, achievedStepIndex, error }: t__loadAchievedResponse = await loadAchievedState();
      if (error.error) {
        console.log(error.message);
        return
      }
      setAchievedLevelIndex(achievedLevelIndex);
      setAchievedStepIndex(achievedStepIndex);
    }
    init();
  }, [])

  useEffect(() => {
    // 問題遷移開始（Titleのボタンおされた。問題正解時、次へ進むを押した）
    if (isNextStep !== null) {
      updatePosition(levelIndex, stepIndex, isNextStep, setStepIndex, setLevelIndex, setIsNextStep);
    }
  }, [levelIndex, stepIndex, isNextStep, achievedLevelIndex, achievedStepIndex, setIsNextStep, setStepIndex, setLevelIndex]);

  return (
    <div className="px-4 flex justify-center flex-1">
      <div className="w-full max-w-[750px] flex flex-col">
        <Title
          levelIndex={levelIndex}
          stepIndex={stepIndex}
          setLevelIndex={setLevelIndex}
          setStepIndex={setStepIndex}
          setIsNextStep={setIsNextStep}
          setPreviewState={setPreviewState}
          setSelectedOptionIndex={setSelectedOptionIndex}
          achievedLevelIndex={achievedLevelIndex}
          achievedStepIndex={achievedStepIndex}
        />
        <Explains levelIndex={levelIndex} stepIndex={stepIndex} />
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
          setAchievedLevelIndex={setAchievedLevelIndex}
          setAchievedStepIndex={setAchievedStepIndex}
          />
      </div>
    </div>
  );
}
