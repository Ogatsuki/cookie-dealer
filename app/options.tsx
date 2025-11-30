import { Fragment } from "react";
import type { t__Props, t__PropChildren } from "./type";
const keys = ["name", "value", "domain", "path", "expires", "maxAge", "secure", "httpOnly", "sameSite"] as const;
const values = [
  [
    [
      ["name-1-1-1", "value-1-1-1", "domain-1-1-1.com", "/", "expire-1-1-1", "max-age-1-1-1", "secure-1-1-1", "httpOnly-1-1-1", "sameSite-1-1-1"],
      ["name-1-1-2", "value-1-1-2", "domain-1-1-2.com", "/", "expire-1-1-2", "max-age-1-1-2", "secure-1-1-2", "httpOnly-1-1-2", "sameSite-1-1-2"],
      ["name-1-1-3", "value-1-1-3", "domain-1-1-3.com", "/", "expire-1-1-3", "max-age-1-1-3", "secure-1-1-3", "httpOnly-1-1-3", "sameSite-1-1-3"],
      ["name-1-1-4", "value-1-1-4", "domain-1-1-4.com", "/", "expire-1-1-4", "max-age-1-1-4", "secure-1-1-4", "httpOnly-1-1-4", "sameSite-1-1-4"],
    ],
    [
      ["name-1-2-1", "value-1-2-1", "domain-1-2-1.com", "/", "expire-1-2-1", "max-age-1-2-1", "secure-1-2-1", "httpOnly-1-2-1", "sameSite-1-2-1"],
      ["name-1-2-2", "value-1-2-2", "domain-1-2-2.com", "/", "expire-1-2-2", "max-age-1-2-2", "secure-1-2-2", "httpOnly-1-2-2", "sameSite-1-2-2"],
      ["name-1-2-3", "value-1-2-3", "domain-1-2-3.com", "/", "expire-1-2-3", "max-age-1-2-3", "secure-1-2-3", "httpOnly-1-2-3", "sameSite-1-2-3"],
    ]
  ],
  [
    [
      ["name-2-1-1", "value-2-1-1", "domain-2-1-1.com", "/", "expire-2-1-1", "max-age-2-1-1", "secure-2-1-1", "httpOnly-2-1-1", "sameSite-2-1-1"],
      ["name-2-1-2", "value-2-1-2", "domain-2-1-2.com", "/", "expire-2-1-2", "max-age-2-1-2", "secure-2-1-2", "httpOnly-2-1-2", "sameSite-2-1-2"],
      ["name-2-1-3", "value-2-1-3", "domain-2-1-3.com", "/", "expire-2-1-3", "max-age-2-1-3", "secure-2-1-3", "httpOnly-2-1-3", "sameSite-2-1-3"],
    ],
    [
      ["name-2-2-1", "value-2-2-1", "domain-2-2-1.com", "/", "expire-2-2-1", "max-age-2-2-1", "secure-2-2-1", "httpOnly-2-2-1", "sameSite-2-2-1"],
      ["name-2-2-2", "value-2-2-2", "domain-2-2-2.com", "/", "expire-2-2-2", "max-age-2-2-2", "secure-2-2-2", "httpOnly-2-2-2", "sameSite-2-2-2"],
      ["name-2-2-3", "value-2-2-3", "domain-2-2-3.com", "/", "expire-2-2-3", "max-age-2-2-3", "secure-2-2-3", "httpOnly-2-2-3", "sameSite-2-2-3"],
    ]
  ],
  [
    [
      ["name-3-1-1", "value-3-1-1", "domain-3-1-1.com", "/", "expire-3-1-1", "max-age-3-1-1", "secure-3-1-1", "httpOnly-3-1-1", "sameSite-3-1-1"],
      ["name-3-1-2", "value-3-1-2", "domain-3-1-2.com", "/", "expire-3-1-2", "max-age-3-1-2", "secure-3-1-2", "httpOnly-3-1-2", "sameSite-3-1-2"],
      ["name-3-1-3", "value-3-1-3", "domain-3-1-3.com", "/", "expire-3-1-3", "max-age-3-1-3", "secure-3-1-3", "httpOnly-3-1-3", "sameSite-3-1-3"],
    ],
    [
      ["name-3-2-1", "value-3-2-1", "domain-3-2-1.com", "/", "expire-3-2-1", "max-age-3-2-1", "secure-3-2-1", "httpOnly-3-2-1", "sameSite-3-2-1"],
      ["name-3-2-2", "value-3-2-2", "domain-3-2-2.com", "/", "expire-3-2-2", "max-age-3-2-2", "secure-3-2-2", "httpOnly-3-2-2", "sameSite-3-2-2"],
      ["name-3-2-3", "value-3-2-3", "domain-3-2-3.com", "/", "expire-3-2-3", "max-age-3-2-3", "secure-3-2-3", "httpOnly-3-2-3", "sameSite-3-2-3"],
    ]
  ]
];

const optionsColors = ["#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB"];


const SetOptionValues: React.FC<t__PropChildren> = ({level, step, i_option}) => {
  const valuesArray = values[level][step][i_option];

  return (
    valuesArray.map((value, i) => {
      return (
        <Fragment key={i}>
          <dt className="whitespace-pre">{keys[i]} : </dt>
          <dd>{value}</dd>
        </Fragment>
      )
    })
  )
}

const Options: React.FC<t__Props> = ({level, step}) => {
  return (
    <section>
      <h2 className="sr-only">選択肢一覧</h2>
      <div className="@container grid-cols-3 gap-3">
        {values[level][step].map((_, i) => {
          return (
            <Fragment key={i}>
              <div className={optionsColors[i] + " rounded-md p-3"}>
                <dl>
                  <SetOptionValues level={level} step={step} i_option={i} />
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