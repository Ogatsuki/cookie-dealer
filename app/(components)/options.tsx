import { Fragment } from "react";
import type { t__Props, t__PropChildren } from "../type";
const keys = ["ドメイン", "名前", "値", "Path", "expires", "maxAge", "secure", "httpOnly", "sameSite"] as const;
const values = [
  // Level 1: ドメインの一致
  [
    // Step 0: myshop.com
    [
      ["google.com", "NID", "511=eV9...", "/", "2025-12-31", "31536000", "true", "true", "None"],
      ["myshop.com", "session_id", "user_8823", "/", "Session", "-", "true", "true", "Lax"],
      ["yahoo.co.jp", "B", "d9f8...", "/", "2026-01-01", "31536000", "true", "true", "Lax"],
    ],
    // Step 1: login.service.org
    [
      ["service.com", "auth_token", "invalid_token", "/", "Session", "-", "true", "true", "Lax"],
      ["service.org", "session", "valid_user_x", "/", "Session", "-", "true", "true", "Lax"],
      ["login.service.net", "track_id", "abc-123", "/", "2025-12-31", "3600", "true", "false", "None"],
    ]
  ],
  // Level 2: サブドメイン
  [
    // Step 0: blog.example.com (親ドメインからの継承)
    [
      [".example.com", "theme", "dark_mode", "/", "2030-01-01", "99999999", "true", "false", "Lax"],
      ["other-site.com", "ad_id", "g4g5g6", "/", "Session", "-", "true", "true", "None"],
      ["random.net", "uid", "guest", "/", "Session", "-", "false", "false", "Lax"],
    ],
    // Step 1: app.example.com (兄弟ドメインの分離)
    [
      ["blog.example.com", "post_draft", "title='Hello'", "/admin", "Session", "-", "true", "true", "Lax"],
      ["app.example.com", "dashboard_config", "view='grid'", "/", "2025-12-31", "86400", "true", "false", "Lax"],
      [".example.net", "global_id", "net_user_1", "/", "Session", "-", "true", "true", "None"],
    ]
  ],
  // Level 3: 3rd Party Cookie
  [
    // Step 0: ニュースサイトの広告リクエスト (ad-server.com)
    [
      ["ad-server.com", "ad_id", "abc-123", "/", "2026-01-01", "31536000", "true", "true", "None"],
      ["news.site.com", "session_id", "news_user_token", "/", "Session", "-", "true", "true", "Lax"],
      ["other-ad.com", "track_data", "def-456", "/", "2025-12-31", "3600", "true", "false", "None"],
    ],
    // Step 1: ECサイトの広告リクエスト (ad-server.com)
    [
      ["ad-server.com", "ad_id", "abc-123", "/", "2026-01-01", "31536000", "true", "true", "None"], // 同じ広告ID
      ["ec-shop.com", "cart_id", "999-XYZ", "/", "Session", "-", "true", "true", "Lax"],
      ["news.site.com", "last_view", "article_x", "/", "Session", "-", "true", "true", "Lax"],
    ]
  ],
  // Level 4: プライバシーとCookie
  [
    // Step 0: 映画データベースサイト (趣味嗜好)
    [
      ["movie-database.com", "MovieGenre", "Action", "/", "2026-01-01", "31536000", "true", "false", "Lax"],
      ["movie-database.com", "session_id", "user_session_abc", "/", "Session", "-", "true", "true", "Lax"],
      ["movie-database.com", "viewed_count", "100", "/", "2025-12-31", "86400", "false", "false", "Lax"],
    ],
    // Step 1: 映画データベースサイト (おすすめ)
    [
      ["movie-database.com", "MovieGenre", "Comedy", "/", "2026-01-01", "31536000", "true", "false", "Lax"],
      ["movie-database.com", "user_setting", "theme_dark", "/", "2025-12-31", "86400", "true", "false", "Lax"],
      ["another-site.com", "tracking_id", "xyz", "/", "Session", "-", "true", "false", "None"],
    ]
  ],
  // Level 5: SameSite属性
  [
    // Step 0: 銀行サイトへの不正送金リンク
    [
      ["bank.com", "session_id", "bank_user_123", "/", "Session", "-", "true", "true", "Lax"], // 正解 (Laxで送信されない)
      ["bank.com", "user_info", "name=Alice", "/", "Session", "-", "true", "false", "None"], // Noneは送られる
      ["bank.com", "csrf_token", "random_csrf_val", "/", "Session", "-", "true", "true", "Strict"], // Strictは送られない
    ],
    // Step 1: (まだ指示なし)
    [
      ["domain-5-2-1.com", "name-5-2-1", "value-5-2-1", "/", "expire-5-2-1", "max-age-5-2-1", "secure-5-2-1", "httpOnly-5-2-1", "sameSite-5-2-1"],
      ["domain-5-2-2.com", "name-5-2-2", "value-5-2-2", "/", "expire-5-2-2", "max-age-5-2-2", "secure-5-2-2", "httpOnly-5-2-2", "sameSite-5-2-2"],
      ["domain-5-2-3.com", "name-5-2-3", "value-5-2-3", "/", "expire-5-2-3", "max-age-5-2-3", "secure-5-2-3", "httpOnly-5-2-3", "sameSite-5-2-3"],
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