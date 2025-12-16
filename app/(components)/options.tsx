import { Fragment } from "react";
import type { t__Props, t__PropChildren } from "../type";
import { optionValues, optionKeys } from "../context/gameContext";


const optionsCardColors = ["lime", "blue", "purple", "red", "indigo", "light-blue", "cyan", "teal", "green"];


const SetOptionValues: React.FC<t__PropChildren> = ({levelIndex, stepIndex, i_option}) => {
  const valuesArray = optionValues[levelIndex][stepIndex][i_option];
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

const Options: React.FC<t__Props> = ({levelIndex, stepIndex}) => {
  return (
    <section className="mt-10">
      <h2 className="sr-only">選択肢一覧</h2>
      <div className="@container grid grid-cols-3 gap-6">
        {optionValues[levelIndex][stepIndex].map((_, i) => {
          return (
            <Fragment key={i}>
              <div className={"w-full rounded-md px-5 py-5 w-[300px] h-fit shadow-lg hover:shadow-md transition duration-200 ring-1" +
                (i == 0 ? ` bg-lime-100/50 ring-lime-200` : "") +
                (i == 1 ? ` bg-blue-100/50 ring-blue-200` : "") +
                (i == 2 ? ` bg-purple-100/50 ring-purple-200` : "") +
                (i == 3 ? ` bg-red-100/50 ring-red-200` : "") +
                (i == 4 ? ` bg-indigo-100/50 ring-indigo-200` : "") +
                (i == 5 ? ` bg-light-blue-100/50 ring-light-blue-200` : "") +
                (i == 6 ? ` bg-cyan-100/50 ring-cyan-200` : "") +
                (i == 7 ? ` bg-teal-100/50 ring-teal-200` : "") +
                (i == 8 ? ` bg-green-100/50 ring-green-200` : "")
              }>
                <dl>
                  <SetOptionValues levelIndex={levelIndex} stepIndex={stepIndex} i_option={i} />
                </dl>
              </div>
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}


export default Options;