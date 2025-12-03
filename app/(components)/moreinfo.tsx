import type { t__Props } from '../type.js'
const detail = [
  [
    ["【HTTP Request Header イメージ】\n\nGET /cart HTTP/1.1\nHost: myshop.com\nCookie: session_id=user_8823\n\n--- 解説 ---\nブラウザはサーバーにリクエストを送る際、保存してあるCookieの中から「条件に合うもの」だけを自動的に選別してヘッダに付与します。\nこの「条件」の最も基本的なルールが「ドメインの一致」です。"],
    ["1-2 cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなデータ片です。これらのデータは、ユーザーのセッション情報、認証情報、サイトの設定などを保存するために使用されます。"],
  ],
  [
    ["2-1 cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなデータ片です。これらのデータは、ユーザーのセッション情報、認証情報、サイトの設定などを保存するために使用されます。"],
    ["2-2 cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなデータ片です。これらのデータは、ユーザーのセッション情報、認証情報、サイトの設定などを保存するために使用されます。"],
  ],
  [
    ["3-1 cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなデータ片です。これらのデータは、ユーザーのセッション情報、認証情報、サイトの設定などを保存するために使用されます。"],
    ["3-2 cookieとは、ウェブサイトがユーザーのブラウザに保存する小さなデータ片です。これらのデータは、ユーザーのセッション情報、認証情報、サイトの設定などを保存するために使用されます。"],
  ]
]


const MoreInfo: React.FC<t__Props> = ({level, step}) => {
  return (
    <section className='mt-8'>
      <h2 className="sr-only">詳細情報</h2>
      <details>
        <summary className=''>技術詳細を見る</summary>
        <p>{detail[level][step]}</p>
      </details>
    </section>
  )
}


export default MoreInfo;