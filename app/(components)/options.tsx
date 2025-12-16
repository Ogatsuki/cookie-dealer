import { Fragment } from "react";
import type { t__Props, t__PropChildren } from "../type";
const keys = ["ドメイン", "名前", "値", "Path", "expires", "maxAge", "secure", "httpOnly", "sameSite"] as const;
const values = [
  [
    [
      ["google.com", "NID", "511=eV9...", "/", "2025-12-31", "31536000", "true", "true", "None"],
      ["myshop.com", "session_id", "user_8823", "/", "Session", "-", "true", "true", "Lax"],
      ["yahoo.co.jp", "B", "d9f8...", "/", "2026-01-01", "31536000", "true", "true", "Lax"],
    ],
    [
      ["domain-1-2-1.com", "name-1-2-1", "value-1-2-1", "/", "expire-1-2-1", "max-age-1-2-1", "secure-1-2-1", "httpOnly-1-2-1", "sameSite-1-2-1"],
      ["domain-1-2-2.com", "name-1-2-2", "value-1-2-2", "/", "expire-1-2-2", "max-age-1-2-2", "secure-1-2-2", "httpOnly-1-2-2", "sameSite-1-2-2"],
      ["domain-1-2-3.com", "name-1-2-3", "value-1-2-3", "/", "expire-1-2-3", "max-age-1-2-3", "secure-1-2-3", "httpOnly-1-2-3", "sameSite-1-2-3"],
    ]
  ],
  [
    [
      ["domain-2-1-1.com", "name-2-1-1", "value-2-1-1", "/", "expire-2-1-1", "max-age-2-1-1", "secure-2-1-1", "httpOnly-2-1-1", "sameSite-2-1-1"],
      ["domain-2-1-2.com", "name-2-1-2", "value-2-1-2", "/", "expire-2-1-2", "max-age-2-1-2", "secure-2-1-2", "httpOnly-2-1-2", "sameSite-2-1-2"],
      ["domain-2-1-3.com", "name-2-1-3", "value-2-1-3", "/", "expire-2-1-3", "max-age-2-1-3", "secure-2-1-3", "httpOnly-2-1-3", "sameSite-2-1-3"],
    ],
    [
      ["domain-2-2-1.com", "name-2-2-1", "value-2-2-1", "/", "expire-2-2-1", "max-age-2-2-1", "secure-2-2-1", "httpOnly-2-2-1", "sameSite-2-2-1"],
      ["domain-2-2-2.com", "name-2-2-2", "value-2-2-2", "/", "expire-2-2-2", "max-age-2-2-2", "secure-2-2-2", "httpOnly-2-2-2", "sameSite-2-2-2"],
      ["domain-2-2-3.com", "name-2-2-3", "value-2-2-3", "/", "expire-2-2-3", "max-age-2-2-3", "secure-2-2-3", "httpOnly-2-2-3", "sameSite-2-2-3"],
    ]
  ],
  [
    [
      ["domain-3-1-1.com", "name-3-1-1", "value-3-1-1", "/", "expire-3-1-1", "max-age-3-1-1", "secure-3-1-1", "httpOnly-3-1-1", "sameSite-3-1-1"],
      ["domain-3-1-2.com", "name-3-1-2", "value-3-1-2", "/", "expire-3-1-2", "max-age-3-1-2", "secure-3-1-2", "httpOnly-3-1-2", "sameSite-3-1-2"],
      ["domain-3-1-3.com", "name-3-1-3", "value-3-1-3", "/", "expire-3-1-3", "max-age-3-1-3", "secure-3-1-3", "httpOnly-3-1-3", "sameSite-3-1-3"],
    ],
    [
      ["domain-3-2-1.com", "name-3-2-1", "value-3-2-1", "/", "expire-3-2-1", "max-age-3-2-1", "secure-3-2-1", "httpOnly-3-2-1", "sameSite-3-2-1"],
      ["domain-3-2-2.com", "name-3-2-2", "value-3-2-2", "/", "expire-3-2-2", "max-age-3-2-2", "secure-3-2-2", "httpOnly-3-2-2", "sameSite-3-2-2"],
      ["domain-3-2-3.com", "name-3-2-3", "value-3-2-3", "/", "expire-3-2-3", "max-age-3-2-3", "secure-3-2-3", "httpOnly-3-2-3", "sameSite-3-2-3"],
    ]
  ]
];

const optionsCardColors = ["lime", "blue", "purple", "red", "indigo", "light-blue", "cyan", "teal", "green"];


const SetOptionValues: React.FC<t__PropChildren> = ({levelIndex, stepIndex, i_option}) => {
  const valuesArray = values[levelIndex][stepIndex][i_option];

  return (
    valuesArray.map((value, i) => {
      return (
        <div className="flex" key={i}>
          <dt className="whitespace-pre">{keys[i]} : </dt>
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
        {values[levelIndex][stepIndex].map((_, i) => {
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