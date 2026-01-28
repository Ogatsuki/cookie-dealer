'use client';

import { Fragment, useEffect, useActionState } from "react";
import type { t__PropChildren } from "../type";
import { optionValues } from "../../utils/context/gameContext";
import { optionKeys } from "../../utils/context/gameContext";
import { checking_answers, type t__responseState_answerCheck } from "../actions";

type ChoicesProps = {
  levelIndex: number;
  stepIndex: number;
  setIsNextStep: React.Dispatch<React.SetStateAction<number | null>>;
  previewState: number;
  setPreviewState: React.Dispatch<React.SetStateAction<number>>;
  selectedOptionIndex: number | null;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setAchievedLevelIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setAchievedStepIndex: React.Dispatch<React.SetStateAction<number | null>>;
}


const SetOptionValues: React.FC<t__PropChildren> = ({levelIndex, stepIndex, optionIndex}) => {
  const valuesArray = optionValues[levelIndex][stepIndex][optionIndex];
  return (
    valuesArray.map((value, i) => {
      return (
        <div className="flex" key={i}>
          <dt className="whitespace-pre">{optionKeys[i]} : </dt>
          <dd>{value}</dd>
        </div>
      )
    })
  )
}


export default function Choices({ levelIndex, stepIndex, setIsNextStep, previewState, setPreviewState, selectedOptionIndex, setSelectedOptionIndex, setAchievedLevelIndex, setAchievedStepIndex }: ChoicesProps) {
  const initialResponse: t__responseState_answerCheck = { isCorrect: null, error: null, timeStamp: null };
  const [response, action] = useActionState(checking_answers, initialResponse)
  const whenButtonPushed = () => {
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }



  useEffect(() => {
    if (response.timeStamp !== null) {
      // 正解の取得後、クリーンの正解・不正解の表示をあわせてきりかえる
      setPreviewState(response.isCorrect ? 1 : -1);
      setAchievedLevelIndex(levelIndex);
      setAchievedStepIndex(stepIndex);
    }
  }, [response.isCorrect, response.timeStamp, setPreviewState]);

  return (
    <>
      <section className="mt-8">
        <h2 className="sr-only">選択肢一覧</h2>
        <div className="grid grid-cols-3 gap-6">
          {optionValues[levelIndex][stepIndex].map((_, i) => {
            return (
              <Fragment key={i}>
                <div className={`w-full hover:cursor-pointer rounded-md px-5 py-5 min-w-[220px] h-fit shadow-md ring-1 transition-all duration-100 ${selectedOptionIndex === i ? "ring-4" : ""}` +
                  (i == 0 ? ` bg-lime-100/50 ring-lime-400` : "") +
                  (i == 1 ? ` bg-blue-100/50 ring-blue-400` : "") +
                  (i == 2 ? ` bg-purple-100/50 ring-purple-400` : "") +
                  (i == 3 ? ` bg-red-100/50 ring-red-400` : "") +
                  (i == 4 ? ` bg-indigo-100/50 ring-indigo-400` : "") +
                  (i == 5 ? ` bg-sky-100/50 ring-sky-400` : "") +
                  (i == 6 ? ` bg-cyan-100/50 ring-cyan-400` : "") +
                  (i == 7 ? ` bg-teal-100/50 ring-teal-400` : "") +
                  (i == 8 ? ` bg-green-100/50 ring-green-400` : "")
                } onClick={() => setSelectedOptionIndex(i)} >
                  <dl>
                    <SetOptionValues levelIndex={levelIndex} stepIndex={stepIndex} optionIndex={i} />
                  </dl>
                </div>
              </Fragment>
            )
          })}
        </div>
      </section>
      <form className="mt-10 mb-16" action={action}>
        <input type="hidden" name='selectedOptionIndex' value={String(selectedOptionIndex)} />
        <input type="hidden" name='levelIndex' value={levelIndex} />
        <input type="hidden" name='stepIndex' value={stepIndex} />
        <div className="flex justify-center items-center gap-8">
        {previewState === 0 && <button type="submit" disabled={selectedOptionIndex === null} className={`px-8 py-5 bg-blue-700 text-white rounded-2xl font-bold tracking-widest hover:shadow-md ${selectedOptionIndex === null ? "bg-gray-500" : "hover:cursor-pointer"}`}>Cookie送信</button>}
        {previewState === 1 && (
          <div className="flex gap-6">
            <button type='button' onClick={() => {setIsNextStep(1); whenButtonPushed()}} className="hover:cursor-pointer px-8 py-5 bg-green-600 text-white rounded-2xl font-bold hover:shadow-md">次に進む</button>
            <button type='button' onClick={() => {setIsNextStep(null); whenButtonPushed()}} className="hover:cursor-pointer px-8 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:shadow-md">やり直す</button>
          </div>
        )}
        {previewState === -1 && <button type='button' onClick={() => {setIsNextStep(null); whenButtonPushed()}} className="hover:cursor-pointer px-8 py-5 bg-red-600 text-white rounded-2xl font-bold hover:shadow-md">やり直す</button>}
        </div>
      </form>
    </>
  )
}