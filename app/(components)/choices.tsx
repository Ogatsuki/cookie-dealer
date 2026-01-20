'use client';

import { Fragment, useState, useEffect, useActionState } from "react";
import type { t__PropChildren } from "../type";
import { optionValues } from "../../utils/context/gameContext";
import { optionKeys } from "../../utils/context/gameContext";
import { checking_answers, type t__responseState_answerCheck } from "../(auth)/actions";

type ChoicesProps = {
  levelIndex: number;
  stepIndex: number;
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsNextStep: React.Dispatch<React.SetStateAction<boolean | null>>;
  setPreviewState: React.Dispatch<React.SetStateAction<number>>;
  selectedOptionIndex: number | null;
  setSelectedOptionIndex: React.Dispatch<React.SetStateAction<number | null>>;
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


export default function Choices({ levelIndex, stepIndex, setLevelIndex, setStepIndex, setIsNextStep, setPreviewState, selectedOptionIndex, setSelectedOptionIndex }: ChoicesProps) {
  const initialResponse: t__responseState_answerCheck = { isCorrect: null, error: null, timeStamp: null };
  const [response, action] = useActionState(checking_answers, initialResponse)

  // step遷移のボタンが押されたらisCorrect, errorをリセット（nullにする）
  const whenNextStepPushed = () => {
    setIsNextStep(true);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  const whenPrevStepPushed = () => {
    setIsNextStep(false);
    setPreviewState(0);
    setSelectedOptionIndex(null);
  }
  const whenFirstPushed = () => {
    setLevelIndex(0);
    setStepIndex(0);
  }
  const whenLastPushed = () => {
    setLevelIndex(optionValues.length - 1);
    setStepIndex(optionValues[optionValues.length - 1].length - 1);
  }

  useEffect(() => {
    if (response.timeStamp !== null) {
      // 正解の取得後、クリーンの正解・不正解の表示をあわせてきりかえる
      setPreviewState(response.isCorrect ? 1 : -1);
    }
  }, [response.isCorrect, response.timeStamp, setPreviewState]);

  return (
    <>
      <section className="mt-10">
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
          <button type='button' className={`hover:cursor-pointer flex text-gray-400 ${levelIndex === 0 && stepIndex === 0 ? 'invisible' : ''}`} onClick={whenFirstPushed}><span className="block rotate-270 text-2xl">▲</span><span className="block rotate-270 text-2xl">▲</span></button>
          <button type="button" className={`hover:cursor-pointer text-gray-400 rotate-270 text-2xl ${levelIndex === 0 && stepIndex === 0 ? 'invisible' : ''}`} onClick={whenPrevStepPushed}>▲</button>
          <button type="submit" disabled={selectedOptionIndex === null} className={`hover:cursor-pointer px-5 py-3 bg-blue-700 text-white rounded-md font-bold hover:shadow-md ${selectedOptionIndex === null ? "bg-gray-700" : ""}`}>cookie送信</button>
          <button type="button" className={`hover:cursor-pointer text-gray-400 rotate-90 text-2xl ${levelIndex === optionValues.length - 1 && stepIndex === optionValues[levelIndex].length - 1 ? 'invisible' : ''}`} onClick={whenNextStepPushed}>▲</button>
          <button type='button' className={`hover:cursor-pointer flex text-gray-400 ${levelIndex === optionValues.length - 1 && stepIndex === optionValues[levelIndex].length - 1 ? 'invisible' : ''}`} onClick={whenLastPushed}><span className="block rotate-90 text-2xl">▲</span><span className="block rotate-90 text-2xl">▲</span></button>
        </div>
      </form>
    </>
  )
}