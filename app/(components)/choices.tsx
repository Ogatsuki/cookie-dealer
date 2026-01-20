'use client';

import { Fragment, useState, useEffect, useActionState } from "react";
import type { t__PropChildren } from "../type";
import { optionValues, errorMessages, explainsAtCorrected } from "../../utils/context/gameContext";
import { optionKeys } from "../../utils/context/gameContext";
import { checking_answers, type t__responseState_answerCheck } from "../(auth)/actions";

type ChoicesProps = {
  levelIndex: number;
  stepIndex: number;
  setIsNextStep: React.Dispatch<React.SetStateAction<boolean | null>>;
  setPreviewState: React.Dispatch<React.SetStateAction<number>>;
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


export default function Choices({ levelIndex, stepIndex, setIsNextStep, setPreviewState }: ChoicesProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const initialResponse: t__responseState_answerCheck = { isCorrect: null, error: null };
  const [response, action, isPending] = useActionState(checking_answers, initialResponse)

  // step遷移のボタンが押されたらisCorrect, errorをリセット（nullにする）
  const whenNextStepPushed = () => {
    setIsNextStep(true);
    setPreviewState(0);
  }
  const whenPrevStepPushed = () => {
    setIsNextStep(false);
    setPreviewState(0);
  }

  useEffect(() => {
    if (isPending === false) {
      // 正解の取得後、クリーンの正解・不正解の表示をあわせてきりかえる
      setPreviewState(response.isCorrect ? 1 : -1);
    }
  }, [isPending])

  return (
    <>
      <section className="mt-10">
        <h2 className="sr-only">選択肢一覧</h2>
        <div className="grid grid-cols-3 gap-6">
          {optionValues[levelIndex][stepIndex].map((_, i) => {
            return (
              <Fragment key={i}>
                <div className={`rounded-md px-5 py-5 w-[300px] h-fit shadow-lg ring-1 hover:shadow-lg transition-all duration-100 ${selectedOptionIndex === i ? "ring-4 shadow-lg" : ""}` +
                  (i == 0 ? ` bg-lime-100/50 ring-lime-200` : "") +
                  (i == 1 ? ` bg-blue-100/50 ring-blue-200` : "") +
                  (i == 2 ? ` bg-purple-100/50 ring-purple-200` : "") +
                  (i == 3 ? ` bg-red-100/50 ring-red-200` : "") +
                  (i == 4 ? ` bg-indigo-100/50 ring-indigo-200` : "") +
                  (i == 5 ? ` bg-light-blue-100/50 ring-light-blue-200` : "") +
                  (i == 6 ? ` bg-cyan-100/50 ring-cyan-200` : "") +
                  (i == 7 ? ` bg-teal-100/50 ring-teal-200` : "") +
                  (i == 8 ? ` bg-green-100/50 ring-green-200` : "")
                } onClick={() => setSelectedOptionIndex(i)}>
                  <dl>
                    <SetOptionValues levelIndex={levelIndex} stepIndex={stepIndex} optionIndex={i} />
                  </dl>
                </div>
              </Fragment>
            )
          })}
        </div>
        <form action={action} className="my-16 flex justify-center items-center gap-16">
          <input type="hidden" name='selectedOptionIndex' value={selectedOptionIndex != null ? selectedOptionIndex : ""} />
          <input type="hidden" name='levelIndex' value={levelIndex} />
          <input type="hidden" name='stepIndex' value={stepIndex} />
          <button type="button" className="text-[15px] font-bold text-gray-600" onClick={whenPrevStepPushed}>前のステップへ</button>
          <button type="submit" disabled={selectedOptionIndex === null} className={`px-5 py-3 bg-blue-700/85 text-white rounded-md font-bold hover:shadow-md ${selectedOptionIndex === null ? "bg-gray-700" : ""}`}>サーバーに送信</button>
          <button type="button" className="text-[15px] font-bold text-gray-600" onClick={whenNextStepPushed}>次のステップへ</button>
        </form>
      </section>
    </>
  )
}